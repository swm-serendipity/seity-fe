import { ChangeEvent, useEffect, useState } from "react";

type SignupLoginInputProps = {
  label: string;
  idName: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function SignupLoginInput({
  label,
  idName,
  value,
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
        value={value}
        onChange={onChange}
        className="w-full py-2 border rounded-md border-signup-signup-border focus:border-whitebg-default"
      />
    </div>
  );
}

type SignupPasswordCheckInputProps = {
  label: string;
  idName: string;
  value: string;
  onChange: (value: string) => void;
};

export function SignupPasswordCheckInput({
  label,
  idName,
  value,
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full py-2 border rounded-md border-signup-signup-border focus:border-whitebg-default"
      />
    </div>
  );
}

type SignupDateInputProps = {
  value: string;
  onChange: (e: any) => void;
};

export function SignupDateInput({ value, onChange }: SignupDateInputProps) {
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
  }, [year, month, day, onChange]);
  return (
    <div className="mb-4 w-[360px]">
      <label htmlFor="birthDate" className="block mb-2">
        생년월일
      </label>
      <div className="flex w-full">
        <input
          value={year}
          maxLength={4}
          minLength={4}
          max={2099}
          min={1900}
          onChange={(e) => setYear(e.target.value)}
          className="py-2 border rounded-md border-signup-signup-border focus:border-whitebg-default w-[114px]"
        />
        <input
          value={month}
          max={12}
          min={1}
          maxLength={2}
          minLength={2}
          onChange={(e) => setMonth(e.target.value)}
          className="py-2 border rounded-md border-signup-signup-border focus:border-whitebg-default w-[114px]"
        />
        <input
          value={day}
          max={31}
          min={1}
          maxLength={2}
          minLength={2}
          onChange={(e) => setDay(e.target.value)}
          className="py-2 border rounded-md border-signup-signup-border focus:border-whitebg-default w-[114px]"
        />
      </div>
    </div>
  );
}
