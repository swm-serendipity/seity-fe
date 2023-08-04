"use client";

import ShareBox from "@/components/user/share-box";
import useSharePromptFetchAndStore from "@/hooks/useSharePromptFetchAndStore";
import { usePathname } from "next/navigation";

export default function SharePage() {
  const pathName = usePathname();
  const id = pathName.split("/share/")[1];
  useSharePromptFetchAndStore(id);

  return <ShareBox />;
}
