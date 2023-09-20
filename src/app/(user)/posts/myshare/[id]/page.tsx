import PostAllBox from "@/components/user/posts/posts-all/posts-all-box";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seity | 내가 공유한 프롬프트",
  description: "내가 공유한 글",
};

export default function MySharePage() {
  return <PostAllBox type="myshare" />;
}
