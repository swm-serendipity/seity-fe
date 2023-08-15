interface Post {
  id: string;
  like: boolean;
  likeNumber: number;
  views: number;
  llm: string;
  createdAt: string;
  lastModifiedAt: string;
  title: string;
  memberProfileBackgroundHex: string;
  memberProfileTextHex: string;
  firstQna: {
    question: string;
    answer: string;
  };
  memberName: string;
  memberPart: string;
}
