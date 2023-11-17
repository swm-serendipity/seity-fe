interface SensitiveData {
  docs: string;
  content: string;
  similarity: number;
}

interface SensitiveDataWithId extends SensitiveData {
  id: string;
}
