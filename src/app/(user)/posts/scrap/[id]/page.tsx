import PostAllBox from "@/components/user/posts/posts-all/posts-all-box";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seity | 스크랩 프롬프트",
  description: "스크랩 한 글",
};

export default function MyScrapPage() {
  return <PostAllBox type="scrap" />;
}
