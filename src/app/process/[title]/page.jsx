"use client";

import classes from "./process.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// components
import ProcessingSymbol from "@/components/processing-symbol/page";

export default function Process({ params }) {
  const router = useRouter();
  console.log(params.title);

  useEffect(() => {
    // Set a timeout and store its reference
    const timeoutId = setTimeout(() => {
      router.push(`/issue/${params.title}`);
    }, 8000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array to run only once on mount

  return (
    <main className="flex justify-center items-center h-screen">
      <ProcessingSymbol />
    </main>
  );
}
