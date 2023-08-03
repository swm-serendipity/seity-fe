import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import getLoginTest from "@/apis/get-login-test";
import { useStore } from "@/store/store";

function useRequireLogin() {
  const router = useRouter();
  const { setPopupData } = useStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("accessToken");

    if (!token) {
      router.replace("/login");
      return;
    }

    const checkLogin = async () => {
      try {
        await getLoginTest();
      } catch (e) {
        setPopupData({
          type: "title-ok",
          isVisible: true,
          title: "세션 만료",
          content: "세션이 만료되었습니다. 재로그인 바랍니다.",
          handleCancel: () => {},
          handleOk: () => {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            router.replace("/login");
          },
        });
      } finally {
        setIsLoading(false);
      }
    };

    checkLogin();
  }, [router]);
  return { isLoading };
}

export default useRequireLogin;
