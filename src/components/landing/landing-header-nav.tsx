"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LandingHeaderNav() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(localStorage.getItem("accessToken") !== null);
  }, []);
  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.push("/");
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
