"use client";

import getLoginTest from "@/apis/get-login-test";
import ChatBox from "@/components/chat/chat-box";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ChatPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.replace("/login");
    }
    const checkLogin = async () => {
      try {
        const loginTestResult = await getLoginTest();
      } catch (e) {
        console.error(e);
        router.replace("/login");
      }
    };
    checkLogin();
  }, []);

  return <ChatBox />;
}
