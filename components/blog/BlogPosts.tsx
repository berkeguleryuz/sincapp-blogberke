// Tüm veri setlerini burada dışarıdan alıyoruz. Ana sayfadaki ReactComponent verisi ve BlogMain verisi birbirine bağlı olduğundan, işlemler burada.
// Componentler mümkün olduğunca mobil responsive tasarlanmıştır.

import Link from "next/link";
import React from "react";

type PostProps = {
  posts: Array<{ id: string; title: string; body: string; userId: string }>;
};

const BlogPosts = ({ posts }: PostProps) => {
  return (
    <section className="flex justify-center items-center text-center">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <div className="flex flex-col bg-neutral-900 hover:shadow-xl hover:shadow-orange-500 border rounded-bl-[100px] rounded-tr-[100px]">
              <div className="w-full h-[200px] px-4 mt-5 space-y-2">
                <span className="p-2 border max-w-max bg-orange-500">
                  {post.id}
                </span>
                <h1 className="text-base font-semibold">{post.title}</h1>
                <h2 className="text-sm font-normal">{post.body}</h2>
              </div>
              <p className="p-2 bg-neutral-800 mx-auto rounded-lg">
                UserID: {post.userId}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
