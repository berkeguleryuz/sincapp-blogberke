// Gelen post verileri burada basılıyor.

import React from "react";

type PostProps = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type PostIDProps = {
  post: PostProps;
};

const PostID = ({ post }: PostIDProps) => {
  return (
    <div className="md:my-24 border-none p-5 hover:shadow-[0_0_25px_0_rgba(0,0,0,0.8)] shadow-[0_0_20px_0_rgba(0,0,0,0.5)]">
      <div className="space-y-8">
        <div className="w-full border p-2 max-w-max bg-lime-300 rounded-full text-black">
          PostID: {post.id}
        </div>

        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-300">{post.body}</p>
      </div>
      <div className="flex bg-orange-200 rounded-full max-w-min items-center text-center p-2 text-black mt-2">
        UserID: 
        <p className="ml-2 font-bold">{post.userId}</p>
      </div>
    </div>
  );
};

export default PostID;
