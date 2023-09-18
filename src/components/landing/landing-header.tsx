"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import MobileMenu from "./mobile-menu";
import LandingHeaderNav from "./landing-header-nav";
import Logo from "../assets/logo";

export default function LandingHeader() {
  const [top, setTop] = useState<boolean>(true);

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}

          <LandingHeaderNav />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
