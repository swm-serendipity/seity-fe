import { useState } from "react";

export default function NotificationMenus() {
  const [menuId, setMenuId] = useState(0);
  const menus = [
    { name: "전체", id: 0, isAlert: false },
    { name: "소명", id: 1, isAlert: true },
    { name: "공지", id: 2, isAlert: false },
  ];

  const onClickMenu = (id: number) => {
    setMenuId(id);
  };
  return (
    <div className="border-b border-notification-hr pl-5 flex gap-4 pb-0.5">
      {menus.map((menu) => {
        const isSelect = menuId === menu.id;
        return (
          <button
            key={menu.id}
            className="text-body-large relative"
            onClick={() => {
              onClickMenu(menu.id);
            }}
          >
            <p
              className={`py-2 border-black ${
                isSelect
                  ? "border-b-4 pb-1 text-whitebg-default"
                  : "text-whitebg-info"
              }`}
            >
              {menu.name}
            </p>
            {menu.isAlert && (
              <div className="rounded-full bg-prompt-de-identification-red-point-color w-1 h-1 absolute -right-1.5 top-1.5" />
            )}
          </button>
        );
      })}
    </div>
  );
}
