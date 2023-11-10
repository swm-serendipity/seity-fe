"use client";

import deleteLogout from "@/apis/delete-logout";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LandingHeaderNav() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(localStorage.getItem("accessToken") !== null);
  }, []);

  const { mutate } = useMutation(deleteLogout, {
    onSettled: () => {
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
      setIsLogin(false);
      router.replace("/");
    },
  });

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    mutate({ refreshToken: localStorage.getItem("refreshToken")! });
  };
  return (
    <nav className="hidden md:flex md:grow">
      <ul className="flex grow justify-end flex-wrap items-center">
        <li>
          {isLogin ? (
            <div
              className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"
              onClick={handleLogout}
            >
              로그아웃
            </div>
          ) : (
            <div
              className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"
              onClick={handleLogin}
            >
              로그인
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
