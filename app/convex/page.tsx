// Next 15 react 19 için vercel update atılmıştır --force
// convex vercel deploy test .env updatei next 15 new

"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { twMerge } from "tw-merge";

export default function Home() {
  const tasks = useQuery(api.tasks?.get);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {tasks?.map(({ id, text, isCompleted }) => (
        <div
          key={id}
          className={twMerge(
            `border w-full h-full p-24 bg-neutral-700 ${isCompleted ? "text-lime-500" : "text-blue-500"}`,
          )}>
          <p>{text}</p>
          <span className="text-neutral-300">
            {isCompleted ? "Completed" : "Not Completed"}
          </span>
        </div>
      ))}
    </main>
  );
}
