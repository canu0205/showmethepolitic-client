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
    <main className="flex justify-center items-center flex-col gap-[20px] ">
      <section id="title1" className={classes.section} onClick={handleClick}>
        <img id="title1" src="/junstone.png" alt="thumbnail" />
        <div id="title1">이준석 신당</div>
      </section>
      <section id="title2" className={classes.section} onClick={handleClick}>
        <img id="title2" src="/han.jpg" alt="thumbnail" />
        <div id="title2">한동훈 비대위원장</div>
      </section>
      <section id="title3" className={classes.section} onClick={handleClick}>
        <img  id="title3" src="/doctor2.jpg" alt="thumbnail" />
        <div id="title3">의사 정원 확대</div>
      </section>
    </main>
  );
}