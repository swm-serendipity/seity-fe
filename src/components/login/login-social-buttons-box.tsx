import SocialLoginButton from "./login-social-button";

export default function LoginSocialButtonBoxs() {
  return (
    <div className="flex flex-col gap-2">
      <SocialLoginButton
        textColor="white"
        color="#03C75A"
        buttonText="네이버 계정으로 로그인"
        socialLogin="naver"
      ></SocialLoginButton>
      <SocialLoginButton
        textColor="black"
        color="#FEE500"
        buttonText="카카오 계정으로 로그인"
        socialLogin="kakao"
      ></SocialLoginButton>
      <SocialLoginButton
        textColor="black"
        color="#FFF"
        buttonText="구글 계정으로 로그인"
        socialLogin="google"
      ></SocialLoginButton>
    </div>
  );
}
