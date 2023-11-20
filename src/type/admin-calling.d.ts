export type AdminCalling = {
  callingId: string;
  userId: string;
  userName: string;
  userProfileBackgroundHex: string;
  userProfileTextHex: string;
  detectionDivision: string[];
  llm: string;
  lastModifiedAt: string;
  resolved: boolean;
};
