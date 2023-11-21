interface SensitiveData {
  docs: string;
  content: string;
  similarity: number;
  link: string;
}

interface SensitiveDataWithId extends SensitiveData {
  id: string;
}
