import { useStore } from "@/store/store";
import formatDate from "@/utils/formatDate";
import Image from "next/image";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

type ShareTitleSectionProps = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
};

export default function ShareTitleSection({
  title,
  setTitle,
}: ShareTitleSectionProps) {
  const date = new Date();
  const inputRef = useRef<HTMLInputElement>(null);

  const { chatData } = useStore();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditButton = () => {
    setIsEditing(!isEditing);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    setTitle(chatData[0]!.message!);
  }, []);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center w-full mt-5 justify-between">
        {isEditing ? (
          <div className="h-10 w-[430px]">
            <input
              ref={inputRef}
              className="w-[430px]"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
        ) : (
          <div className="text-body-large line-clamp-2 w-[430px]">{title}</div>
        )}

        <div
          className="w-8 h-8 flex justify-center items-center rounded-full border bg-[#F9F9F9]"
          onClick={handleEditButton}
        >
          <Image
            src={"/chat/share-edit.png"}
            width={14}
            height={14}
            alt="수정"
          />
        </div>
      </div>
      <div>
        <span className="text-body-medium text-whitebg-info">
          {formatDate(date.toString())}
        </span>
      </div>
    </div>
  );
}
