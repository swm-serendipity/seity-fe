"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MySharePage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/posts/myshare/1");
  }, []);
  return <div></div>;
}
