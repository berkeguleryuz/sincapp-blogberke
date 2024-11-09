// Buraya gelen verileri generateStaticParams ile alt sayfalara bölüyoruz
// generateStaticParams ile tüm gönderi ID'leri için statik sayfa oluşturulmasını sağlıyoruz
// Bu sebeple params varsa id var ve bunu kullanarak verileri alıyoruz
// Eğer id ya da post yoksa hata veriyoruz
// Ayrıca mobil responsive tasarlanmıştır.

import { getPost } from "@/lib/getPost";
import { getPosts } from "@/lib/getPosts";
import Link from "next/link";
import React from "react";
import PostID from "@/components/blog/PostID";
import { FileWarning } from "lucide-react";
import DetailsID from "@/components/blog/DetailsID";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post: Post) => ({
    id: post.id.toString(),
  }));
}

const BlogDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const post = await params.then((params) => getPost(params.id));

  if (!post) {
    return (
      <main className="container mx-auto flex flex-col min-h-screen p-4 items-center justify-center space-y-8">
        <FileWarning className="size-8 fill-red-500 animate-ping ease-in-out transition-all duration-500" />
        <p className="text-red-500">
          Gönderi bulunamadı veya yüklenirken bir hata oluştu.
        </p>
        <Link href="/" className="rounded-full p-4 border hover:bg-neutral-700">
          Ana Sayfaya Dön
        </Link>
      </main>
    );
  }

  const userPosts = await getPosts().then((posts) =>
    posts
      .filter((p: Post) => p.userId === post.userId && p.id !== post.id)
      .slice(0, 3),
  );

  return (
    <main className="container mx-auto flex lg:flex-row flex-col md:gap-8 md:space-y-8 p-4 min-h-screen">
      <div className="lg:w-2/3 w-full">
        <PostID post={post} />
      </div>

      <div className="lg:w-1/3 w-full">
        <DetailsID userPosts={userPosts} />
      </div>
    </main>
  );
};

export default BlogDetailPage;
