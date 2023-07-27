import { useEffect } from "react";
import { useRouter } from "next/navigation";
import getLoginTest from "@/apis/get-login-test";

function useRequireLogin() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      console.log(1);
      router.replace("/login");
      return;
    }

    const checkLogin = async () => {
      try {
        await getLoginTest();
      } catch (e) {
        console.error(e);
        console.log(2);

        router.replace("/login");
      }
    };

    checkLogin();
  }, [router]);
}

export default useRequireLogin;
