import React, { useState } from "react";
import DropdownArrowUp from "../assets/dropdown-arrow-up";
import DropdownArrowDown from "../assets/dropdown-arrow-down";

type Props = {
  hintText: string;
  items: string[];
  width?: number;
  height?: number;
};

export const DropdownBox = ({
  hintText,
  items,
  width = 320,
  height = 52,
}: Props) => {
  const [dropdownVisibie, setDropdownVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  return (
    <>
      <div
        className={`w-[${width}px] h-[${height}px] flex-shrink-0 flex justify-between ${
          dropdownVisibie
            ? "border-r border-l border-t rounded-t"
            : "border rounded-md"
        }  flex items-center mb-2 bg-white
      text-body-medium`}
        onClick={() => setDropdownVisible(!dropdownVisibie)}
      >
        <div
          className={`pl-3
        ${
          selectedItem.length > 0 ? "text-whitebg-default" : "text-whitebg-info"
        }`}
        >
          {selectedItem.length > 0 ? selectedItem : hintText}
        </div>
        <div className="pr-3">
          {dropdownVisibie ? <DropdownArrowUp /> : <DropdownArrowDown />}
        </div>
      </div>

      {dropdownVisibie && (
        <ul
          autoFocus
          className={`absolute -translate-y-[8px] z-40 rounded-b-md border-b border-r border-l bg-white w-[${width}px]`}
        >
          {items.map((item, index) => (
            <li
              className={`text-whitebg-info h-[42px] flex items-center pl-3
              hover:text-whitebg-default hover:bg-[#F5F5F5]`}
              key={index}
              onClick={() => {
                setSelectedItem(item);
                setDropdownVisible(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
