import { FileWarning, Link } from "lucide-react";
import React from "react";

const NotFound = () => {
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
};

export default NotFound;
