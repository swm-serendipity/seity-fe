import { ChangeEvent, useEffect, useState } from "react";
import { DropdownBox } from "../ui/dropdown-box";

type SignupLoginInputProps = {
  label: string;
  idName: string;
  placeholder: string;
  value: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function SignupLoginInput({
  label,
  idName,
  placeholder,
  value,
  type = "text",
  onChange,
}: SignupLoginInputProps) {
  return (
    <div className="mb-4 w-[360px]">
      <label htmlFor={idName} className="block mb-2">
        {label}
      </label>
      <input
        id={idName}
        name={idName}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        className="w-full font-body-medium text-body-medium px-3.5 py-3 border rounded-md border-borde outline-none focus:border-whitebg-default"
      />
    </div>
  );
}

type SignupPasswordCheckInputProps = {
  label: string;
  idName: string;
  placeholder: string;
  value: string;
  error: string;
  onChange: (value: string) => void;
};

export function SignupPasswordCheckInput({
  label,
  idName,
  placeholder,
  value,
  error,
  onChange,
}: SignupPasswordCheckInputProps) {
  return (
    <div className="mb-4 w-[360px]">
      <label htmlFor={idName} className="block mb-2">
        {label}
      </label>
      <input
        id={idName}
        name={idName}
        placeholder={placeholder}
        value={value}
        type="password"
        onChange={(e) => onChange(e.target.value)}
        className="w-full font-body-medium text-body-medium px-3.5 py-3 border rounded-md border-border-default outline-none focus:border-whitebg-default"
      />
      <div>{error}</div>
    </div>
  );
}

type SignupDateInputProps = {
  value: string;
  onChange: (e: any) => void;
};

export function SignupDateInput({ onChange }: SignupDateInputProps) {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    if (year && month && day) {
      onChange({
        target: {
          name: "birthDate",
          value: `${year}-${month}-${day}`,
        },
      });
    }
  }, [year, month, day]);

  return (
    <div className="mb-4 w-[360px] relative">
      <label htmlFor="birthDate" className="block mb-2">
        생년월일
      </label>
      <div className="flex w-full justify-between">
        <div className="relative w-[114px] flex items-center">
          <span className="absolute right-3 text-sm">년</span>
          <input
            value={year}
            maxLength={4}
            minLength={4}
            max={2099}
            min={1900}
            onChange={(e) => setYear(e.target.value)}
            className="py-2 pl-8 pr-2 border rounded-md border-border-default outline-none focus:border-whitebg-default w-full"
          />
        </div>
        <div className="relative w-[114px] flex items-center">
          <span className="absolute right-3 text-sm">월</span>
          <input
            value={month}
            max={12}
            min={1}
            maxLength={2}
            minLength={2}
            onChange={(e) => setMonth(e.target.value)}
            className="py-2 pl-8 pr-2 border rounded-md border-border-default outline-none focus:border-whitebg-default w-full"
          />
        </div>
        <div className="relative w-[114px] flex items-center">
          <span className="absolute right-3 text-sm">일</span>
          <input
            value={day}
            max={31}
            min={1}
            maxLength={2}
            minLength={2}
            onChange={(e) => setDay(e.target.value)}
            className="py-2 pl-8 pr-2 border rounded-md border-border-default outline-none focus:border-whitebg-default w-full"
          />
        </div>
      </div>
    </div>
  );
}

type SignupRankDropDownProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
};

export function SignupRankDropDown({
  label,
  placeholder,
  value,
  onChange,
}: SignupRankDropDownProps) {
  const [selectedItem, setSelectedItem] = useState("");
  useEffect(() => {
    onChange({
      target: {
        name: "part",
        value: selectedItem,
      },
    });
  }, [selectedItem]);
  return (
    <div className="mb-4 w-[360px]">
      <div className="block mb-2">{label}</div>
      <DropdownBox
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        items={["FRONT_END", "BACK_END"]}
        hintText={placeholder}
        width={360}
      />
    </div>
  );
}
