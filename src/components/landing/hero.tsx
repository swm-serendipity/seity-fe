import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              안심하고 사용할 수 있는{" "}
              <p>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-600">
                  대화형 인공지능 보안 솔루션{" "}
                </span>
              </p>
            </h1>
            <div className="max-w-3xl mx-auto mt-20 ">
              <div className="mb-8">
                <p className="text-xl text-gray-600 ">
                  대화형 인공지능 보안 솔루션 Seity를 소개합니다.
                </p>
                <p className="text-xl text-gray-600 ">
                  개인정보와 기업 내부 정보를 안전하게 보호하고, 사용자의
                  편의성을 높이는 보안 솔루션입니다.
                </p>
              </div>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-20">
                <div>
                  <Link
                    className="btn text-white bg-yellow-600 hover:bg-yellow-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="/chat"
                  >
                    시제품 사용해보기
                  </Link>
                </div>
                <div>
                  <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="https://team-serendipity.vercel.app/seity-"
                  >
                    자세히 알아보기
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
        </div>
      </div>
    </section>
  );
}
