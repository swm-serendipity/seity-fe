"use client";

export const metadata: Metadata = {
  title: "Seity | 인기 프롬프트",
  description: "사내 인기 프롬프트",
};

import PostPopularBox from "@/components/user/posts/posts-popular/posts-popular-box";
import { Metadata } from "next";

export default function PopularPromptPage() {
  return <PostPopularBox />;
}
