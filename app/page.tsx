// Tüm gelen verileri burada fetch ediyoruz ve suspense ile gerekli tarafta yoğunlaşma olmasını engelliyoruz.
// Tek component ve veri setimiz olduğundan kullanmasakta olurdu fakat geniş çapta birden fazla gerektiğinde bunu kullanmak daha iyidir

import BlogMain from "@/components/blog/BlogMain";
import ConvexMain from "@/components/ConvexMain";
import { getPosts } from "@/lib/getPosts";
import { Suspense } from "react";

export default async function Home() {
  const blogPosts = await getPosts();
  return (
    <main className="container mx-auto min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold my-6">Sincapp Blog</h1>

        <Suspense fallback={<div>Sincapp Blog || Loading...</div>}>
          <BlogMain posts={blogPosts} />
        </Suspense>
        <Suspense>
          <ConvexMain />
        </Suspense>
      </div>
    </main>
  );
}
