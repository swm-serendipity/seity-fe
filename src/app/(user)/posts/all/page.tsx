"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AllPromptPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/posts/all/1");
  }, []);
  return <div></div>;
}
