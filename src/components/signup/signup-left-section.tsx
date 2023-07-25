export default function SignupLeftSection() {
  return (
    <div className="w-[480px] bg-[url('/signup-bg.svg')] bg-[#363636] bg-no-repeat bg-center bg-contain rounded-l-2xl pl-[60px] pt-[97px] hidden md:block">
      <div className="font-lexend font-light text-xl text-blackbg-point">
        Sign in
      </div>
      <div className="font-lexend font-bold text-4xl text-white mt-0.5 tracking-wider">
        Welcome to Seity!
      </div>
      <div className="text-body-large font-body-large text-white mt-5">
        Seity에 오신 것을 환영합니다!
        <p />
        간단한 서비스 설명글 노출하면 좋을 것 같아요.
      </div>
    </div>
  );
}
