import React, { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import Image from "next/image";
import { useStore } from "@/store/store";
import deleteLogout from "@/apis/delete-logout";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function SidebarSetting() {
  const { setPopupData } = useStore();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const router = useRouter();

  const transitions = useTransition(isMenuVisible, {
    from: { opacity: 0, transform: "translateY(5px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(5px)" },
  });

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleChatSettingButton = () => {
    setPopupData({
      type: "title-ok",
      isVisible: true,
      title: "알림",
      content: "챗 설정이 비활성화 되어있어요.",
      handleCancel: () => {},
      handleOk: () => {},
    });
  };

  const { mutate } = useMutation(deleteLogout, {
    onSettled: () => {
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
      router.replace("/");
    },
  });

  const handleLogoutButton = () => {
    if (localStorage.getItem("refreshToken") == null) {
      return;
    }
    const token = localStorage.getItem("refreshToken");
    mutate({ refreshToken: token! });
  };

  return (
    <div className="relative border-t border-sidebar-button-divider mx-5 bg-whitebg-default">
      <button
        className="flex items-center text-body-medium text-blackbg-default w-full h-[54px]"
        onClick={toggleMenu}
      >
        <Image
          src="/sidebar/sidebar-setting.svg"
          width={16}
          height={16}
          alt="설정"
        />
        <div className="ml-2">챗 설정</div>
      </button>
      {transitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="absolute left-0 bottom-[54px]  py-2 w-full bg-white shadow-xl"
            >
              {/* <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleChatSettingButton}
              >
                세부 설정
              </div> */}
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleLogoutButton}
              >
                로그아웃
              </div>
            </animated.div>
          )
      )}
    </div>
  );
}
