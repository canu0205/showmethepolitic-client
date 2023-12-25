"use client";

import classes from "./home.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

// components
import Search from "@/components/search/page";

export default function Home() {
  const router = useRouter();

  const handleClick = (e) => {
    router.push(`/process/${e.target.id}`);
  };

  return (
    <main className="flex justify-center items-center flex-col gap-[20px] h-screen">
      <sector id="title1" className={classes.section} onClick={handleClick}>
        <img src="" alt="thumbnail" />
      </sector>
      <sector id="title2" className={classes.section} onClick={handleClick}>
        <img src="" alt="thumbnail" />
      </sector>
      <sector id="title3" className={classes.section} onClick={handleClick}>
        <img src="" alt="thumbnail" />
      </sector>
    </main>
  );
}
