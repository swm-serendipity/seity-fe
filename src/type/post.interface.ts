interface Post {
  id: string;
  like: boolean;
  likeNumber: number;
  views: number;
  llm: string;
  createdAt: string;
  lastModifiedAt: string;
  firstQna: {
    question: string;
    answer: string;
  };
}
