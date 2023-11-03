export type PromptHistory = {
  id: string;
  llm: "ChatGPT" | string;
  firstQuestion: string;
  createdAt: string;
  lastModifiedAt: string;
  favorite: boolean;
};

export type PromptHistoryPage = {
  result: {
    totalPages: number;
    totalPromptNumber: number;
    currentPageNumber: number;
    prompts: PromptHistory[];
  };
  nextPage: string | null;
};

export type ChatHistoryData = {
  pages: PromptHistoryPage[];
};
