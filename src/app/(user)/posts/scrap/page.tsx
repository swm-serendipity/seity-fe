"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MyScrapPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/posts/scrap/1");
  }, []);
  return <div></div>;
}
