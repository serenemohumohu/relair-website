// src/components/Header.tsx
// v2: コメントアウトのミスを修正

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    const nextState = !isNavOpen;
    setIsNavOpen(nextState);
    if (nextState) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const closeNav = () => {
    setIsNavOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <div className="max-w-[1280px] mx-auto px-5 h-[60px] md:h-[80px] flex justify-between items-center">
          <h1 className="text-lg font-bold">
            <Link href="/" onClick={closeNav}>
              <Image
                src="/relair_logo.png"
                alt="トータルビューティー リレア"
                width={170}
                height={28}
                className="h-7 md:h-9 w-auto"
                priority
              />
            </Link>
          </h1>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#treatment"
              className="font-bold text-gray-800 relative hover:text-gray-600"
            >
              施術紹介
            </Link>
            <Link
              href="/#staff"
              className="font-bold text-gray-800 relative hover:text-gray-600"
            >
              スタッフ紹介
            </Link>
            <Link
              href="/#voice"
              className="font-bold text-gray-800 relative hover:text-gray-600"
            >
              お客様の声
            </Link>
            <Link
              href="/#column"
              className="font-bold text-gray-800 relative hover:text-gray-600"
            >
              美容コラム
            </Link>
            <Link
              href="/#access"
              className="font-bold text-gray-800 relative hover:text-gray-600"
            >
              店舗情報
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="https://lin.ee/5N9K074"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded text-white text-sm font-bold bg-[#06c755] hover:opacity-80 transition-opacity"
            >
              公式LINE
            </a>
            <a
              href="https://beauty.hotpepper.jp/kr/slnH000500545/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded text-white text-sm font-bold bg-[#ff7700] hover:opacity-80 transition-opacity"
            >
              HOT PEPPER
            </a>
            <Link
              href="/recruit"
              className="px-4 py-2 rounded text-white text-sm font-bold bg-[#c83c3c] hover:opacity-80 transition-opacity"
            >
              セラピスト募集
            </Link>
          </div>

          <button
            onClick={toggleNav}
            className="md:hidden z-50 p-2 space-y-1.5"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
                isNavOpen ? "transform translate-y-2 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${
                isNavOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
                isNavOpen ? "transform -translate-y-2 -rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 z-40 flex flex-col justify-center items-center text-white transition-transform duration-300 ease-in-out ${
          isNavOpen ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-center">
          <Link
            href="/#treatment"
            onClick={closeNav}
            className="text-xl font-bold"
          >
            施術紹介
          </Link>
          <Link href="/#staff" onClick={closeNav} className="text-xl font-bold">
            スタッフ紹介
          </Link>
          <Link href="/#voice" onClick={closeNav} className="text-xl font-bold">
            お客様の声
          </Link>
          <Link
            href="/#column"
            onClick={closeNav}
            className="text-xl font-bold"
          >
            美容コラム
          </Link>
          <Link
            href="/#access"
            onClick={closeNav}
            className="text-xl font-bold"
          >
            店舗情報
          </Link>
        </nav>
        <div className="mt-12 flex flex-col gap-4 w-64">
          <a
            href="https://lin.ee/5N9K074"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-3 rounded text-white font-bold bg-[#06c755]"
          >
            公式LINEで予約
          </a>
          <a
            href="https://beauty.hotpepper.jp/kr/slnH000500545/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-3 rounded text-white font-bold bg-[#ff7700]"
          >
            HOT PEPPERで予約
          </a>
          <Link
            href="/recruit"
            onClick={closeNav}
            className="block w-full text-center px-4 py-3 rounded text-white font-bold bg-[#c83c3c]"
          >
            セラピスト募集
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
