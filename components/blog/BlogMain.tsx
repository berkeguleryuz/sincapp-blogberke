// Burada gelen arama verilerini alt sayfalara bölüyoruz ve sadece gerekli verileri alıyoruz
// Eğer arama verisi yoksa hata veriyoruz
// Mobil responsive tasarlanmıştır

"use client";
import React, { Suspense, useMemo } from "react";
import BlogPosts from "./BlogPosts";
import { useSearchParams } from "next/navigation";
import { LucideFileWarning } from "lucide-react";

type PostProps = {
  posts: Array<{ id: string; title: string; body: string; userId: string }>;
};

const BlogMain = ({ posts }: PostProps) => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const filteredPosts = useMemo(() => {
    if (!searchTerm) return posts;
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, posts]);

  return (
    <Suspense>
      <div>
        {filteredPosts.length === 0 ? (
          <div className="flex flex-col justify-center items-center space-y-4">
            <LucideFileWarning className="size-8 fill-red-500 animate-ping ease-in-out transition-all duration-500" />
            <p>Arama sonucu bulunamadı.</p>
          </div>
        ) : (
          <BlogPosts posts={filteredPosts} />
        )}
      </div>
    </Suspense>
  );
};

export default BlogMain;
