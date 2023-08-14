import ProfileIcon from "@/components/ui/posts/profile-icon";
import Image from "next/image";
import PostsUserChat from "./posts-user-chat";
import PostsAIChat from "./posts-ai-chat";

export function PostsPopularMainCard() {
  return (
    <div className="bg-white min-w-[410px] h-[304px] rounded-2xl flex flex-col px-5">
      <div className="bg-[#EEEEEE] mt-5 h-[180px] rounded-lg px-5 overflow-hidden">
        <PostsUserChat
          text="디카페인은 커피, 차, 콜라, 초콜릿 등에 자연적으로 존재하는 화합물로, 카페인의 일종입니다.디카페인은 커피, 차, 콜라, 초콜릿 등에 자연적으로 존재하는 화합물로, 카페인의 일종입니다.디카페인은 커피, 차, 콜라, 초콜릿 등에 자연적으로 존재하는 화합물로, 카페인의 일종입니다."
          user="Jay"
        />
        <PostsAIChat text="디카페인은 커피, 차, 콜라, 초콜릿 등에 자연적으로 존재하는 화합물로, 카페인의 일종입니다.디카페인은 커피, 차, 콜라, 초콜릿 등에 자연적으로 존재하는 화합물로, 카페인의 일종입니다.디카페인은 커피, 차, 콜라, 초콜릿 등에 자연적으로 존재하는 화합물로, 카페인의 일종입니다." />
      </div>
      <div className="mt-5 text-[18px] font-[600]">
        1. 플러터 개발자는 어떻게 돈을 벌까?
      </div>
      <div className="flex justify-between mt-3.5">
        <ProfileIcon name="김민수" />
        <div className="border-border-default border py-1.5 flex px-3.5 rounded-full">
          <Image
            src="/posts/popular-prompt-like.png"
            width={16}
            height={16}
            alt="좋아요"
          />
          <span className="ml-1.5 text-body-small text-whitebg-info">214</span>
        </div>
      </div>
    </div>
  );
}
