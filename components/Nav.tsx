// Mobil uyumlu tasarlanmıştır

import Link from "next/link";
import React, { Suspense } from "react";
import Search from "./Search";
import Image from "next/image";

const Nav = () => {
  return (
    <header className="flex justify-between container py-4 gap-2 mx-auto items-center text-center">
      <Link
        href={"/"}
        className="font-bold hover:scale-105 transition-all duration-300 text-2xl flex">
        <h1 className="hidden md:block">Sincap</h1>{" "}
        <p className="text-orange-500">Blog</p>
      </Link>
      <Suspense>
        <Search />
      </Suspense>
      <nav className="cursor-pointer hover:scale-105 transition-all duration-300">
        <Image
          src={"/sincapplogo.png"}
          width={200}
          height={200}
          alt="logo"
          priority
        />
      </nav>
    </header>
  );
};

export default Nav;
