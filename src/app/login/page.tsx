import LoginBox from "@/components/login/login-box";

export const metadata = {
  title: "Seity | 로그인",
  description: "대화형 인공지능 보안 솔루션 : Seity",
};

export default function LoginPage() {
  return (
    <div
      className="flex justify-center items-center
   bg-[url('/login-bg.svg')] bg-no-repeat bg-center bg-contain my-12"
    >
      <LoginBox />
    </div>
  );
}
