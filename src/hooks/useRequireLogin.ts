import { useEffect } from "react";
import { useRouter } from "next/navigation";
import getLoginTest from "@/apis/get-login-test";

function useRequireLogin() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      router.replace("/login");
      return;
    }

    const checkLogin = async () => {
      try {
        await getLoginTest();
      } catch (e) {
        console.error(e);

        router.replace("/login");
      }
    };

    checkLogin();
  }, [router]);
}

export default useRequireLogin;
