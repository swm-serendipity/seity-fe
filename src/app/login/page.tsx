import LoginBox from "@/components/login/login-box";

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
