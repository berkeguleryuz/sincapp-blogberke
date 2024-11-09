// Arama sonuçları buradan gelmekte ve mobil responsive tasarlanmıştır.

"use client";
import { SearchIcon } from "lucide-react";
import React, { ChangeEvent, useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSearchTerm = searchParams.get("search") || "";
  const [value, setValue] = useState<string>(initialSearchTerm);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (value) {
        router.push(`/?search=${encodeURIComponent(value)}`);
      } else {
        router.push(window.location.pathname);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [value, router]);

  return (
    <Suspense>
      <div className="flex border rounded-full p-2 cursor-pointer">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Sincapp Blog'da Ara"
          className="bg-transparent outline-none"
        />
        <SearchIcon className="size-6 items-center" />
      </div>
    </Suspense>
  );
};

export default Search;
