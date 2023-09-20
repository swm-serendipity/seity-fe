import deletePost from "@/apis/delete-post";
import SidebarDelteSvg from "@/components/assets/sidebar-delete";
import { useStore } from "@/store/store";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
  type: "all" | "scrap" | "myshare";
  title: string;
  isScrap?: boolean;
  isMyPost?: boolean;
  refetch: () => void;
};

export default function PostsTypeButton({
  id,
  type,
  title,
  isScrap = false,
  isMyPost = false,
  refetch,
}: Props) {
  const router = useRouter();
  const { setPopupData } = useStore();

  const { mutate } = useMutation(deletePost, {
    onSuccess: () => {
      refetch();
    },
  });

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPopupData({
      type: "title-ok-cancel",
      title: "삭제",
      content: "정말 삭제하시겠습니까?",
      handleCancel: () => {},
      handleOk: () => {
        mutate({ postId: id });
      },
      isVisible: true,
    });
  };
  if (type == "myshare" || isMyPost == true) {
    return (
      <div className="flex justify-between">
        <div className="line-clamp-1 mr-10 text-body-large font-bold">
          {title}
        </div>
        <button onClick={handleDelete}>
          <SidebarDelteSvg color={"#000000"} />
        </button>
      </div>
    );
  }
  if (type == "scrap" || isScrap == true) {
    return (
      <div className="flex justify-between">
        <div className="line-clamp-1 mr-10 text-body-large font-bold">
          {title}
        </div>
        <button>
          <Image
            src="/share/share-scrap-on-black.png"
            width={16}
            height={16}
            alt="스크랩"
          />
        </button>
      </div>
    );
  } else {
    return (
      <div className="line-clamp-1 mr-10 text-body-large font-bold">
        {title}
      </div>
    );
  }
}
