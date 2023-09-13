interface Detection {
  id: string;
  userId: string;
  userName: string;
  profileBackgroundHex: string;
  profileTextHex: string;
  question: string;
  createdAt: string;
}

interface DetectionSingleItem {
  id: string;
  userId: string;
  userName: string;
  profileBackgroundHex: string;
  profileTextHex: string;
  promptId: string;
  question: string;
  detectionList: DetectionListItem[];
  createdAt: string;
}

interface DetectionListItem {
  index: number;
  length: number;
  detectionInfo: string;
  deIdentified: boolean;
}
