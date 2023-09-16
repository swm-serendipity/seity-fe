import getAllMember from "@/apis/get-all-member";
import { useQuery } from "@tanstack/react-query";
import {
  Dispatch,
  KeyboardEvent,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  Mention,
  MentionsInput,
  OnChangeHandlerFunc,
  SuggestionDataItem,
} from "react-mentions";

type MentionUserProps = {
  mentionUsers: {
    id: string;
    name: string;
  }[];
  setMentionUsers: Dispatch<
    SetStateAction<
      {
        id: string;
        name: string;
      }[]
    >
  >;
};

export default function SharePopupMentionInput({
  mentionUsers,
  setMentionUsers,
}: MentionUserProps) {
  const [mentionText, setMentionText] = useState("");
  const [mentionData, setMentionData] = useState<MentionUser[]>([]);
  const handleMentionChange: OnChangeHandlerFunc = (e) => {
    setMentionText(e.target.value);
  };
  const pressMentionInput = (
    e: KeyboardEvent<HTMLTextAreaElement> | KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && mentionText.length === 0) {
      setMentionUsers((prev) => prev.slice(0, prev.length - 1));
    }
  };

  const { data, isFetched, isLoading } = useQuery(
    ["get-all-member"],
    getAllMember
  );

  useEffect(() => {
    setMentionData(
      data?.map((item: User) => {
        return {
          ...item,
          display: item.name,
        };
      })
    );
  }, [isFetched]);

  return (
    <div className="w-full h-[60px] bg-[#FAFAFA] mt-2 rounded-lg flex justify-center items-center px-4">
      {mentionUsers.map((user) => (
        <div className="flex-shrink-0 w-auto text-[#3E74FF]" key={user.id}>
          @{user.name},&nbsp;
        </div>
      ))}
      {!isLoading ? (
        <MentionsInput
          value={mentionText}
          onChange={handleMentionChange}
          onKeyDown={pressMentionInput}
          className="w-full bg-[#FAFAFA]"
          placeholder="'@'를 입력해 멤버를 언급하세요!"
          singleLine
        >
          <Mention
            trigger="@"
            data={mentionData}
            displayTransform={(id, display) => `@${display} `}
            onAdd={(id, display) => {
              if (
                typeof id == "string" &&
                mentionUsers.find((user) => user.id === id) === undefined
              )
                setMentionUsers((prev) => [...prev, { id, name: display }]);
              else if (
                mentionUsers.find((user) => user.id === id) !== undefined
              ) {
                alert("같은 사람을 언급할 수 없어요!");
              }
              setMentionText("");
            }}
            renderSuggestion={(
              suggestion: SuggestionDataItem,
              _search: string,
              _highlightedDisplay: ReactNode,
              index: number,
              focused: boolean
            ) =>
              focused ? (
                <div
                  key={index}
                  className="py-1 bg-blue-100 px-1 text-body-medium"
                >
                  {suggestion.display}
                </div>
              ) : (
                <div key={index} className="py-1 px-1 text-body-medium">
                  {suggestion.display}
                </div>
              )
            }
          />
        </MentionsInput>
      ) : (
        <div className="w-full text-gray-400">로딩중</div>
      )}
    </div>
  );
}
