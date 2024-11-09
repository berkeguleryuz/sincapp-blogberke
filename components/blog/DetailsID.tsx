// Burası blog/[id] tarafının DetailsID tarafındaki verilerini işlediğimiz yerdir. Bu verileri page.tsx üzerinden gönderiyoruz ve oradan gelen şekilde işliyoruz. 

import Link from "next/link";
import React from "react";

type PostProps = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type DetailsIDProps = {
  userPosts: PostProps[];
};

const DetailsID = ({ userPosts }: DetailsIDProps) => {
  return (
    <div className="my-24 gap">
      <h2 className="text-2xl font-semibold mb-2">
        Kullanıcının Diğer Gönderileri
      </h2>
      <div className="flex flex-col mx-auto">
        {userPosts.map((userPost) => (
          <Link
            key={userPost.id}
            href={`/blog/${userPost.id}`}
            className="flex flex-col bg-neutral-900 border p-4 hover:bg-neutral-800 transition-colors duration-300 ">
            <div className="w-full h-[200px] space-y-5">
              <p className="p-2 bg-neutral-950 rounded-lg max-w-max">
                UserID: {userPost.userId}
              </p>
              <h1 className="text-base font-semibold">{userPost.title}</h1>
              <h2 className="text-sm font-normal">{userPost.body}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DetailsID;
