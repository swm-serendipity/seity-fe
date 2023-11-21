"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function UserManagementPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/user-management/1");
  }, []);
  return <div></div>;
}
