import PostAllBox from "@/components/user/posts/posts-all/posts-all-box";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seity | 전체 프롬프트",
  description: "사내 전체 프롬프트",
};

export default function MyScrapPage() {
  return <PostAllBox type="scrap" />;
}
