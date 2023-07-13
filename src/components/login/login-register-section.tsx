import Link from "next/link";

export default function LoginRegisterSection() {
  return (
    <div className="mt-5">
      <span className="text-body-medium text-stone-700">
        신규 사용자이신가요?{" "}
      </span>
      <Link
        href={"/signup"}
        className="text-body-medium text-blue-600 underline"
      >
        회원가입
      </Link>
    </div>
  );
}
