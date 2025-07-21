import Link from "next/link";
import { Instagram, Twitter } from "lucide-react"; // アイコン用のライブラリ

const Footer = () => {
  return (
    <footer className="bg-[#1a2e44] text-white/80 py-16 px-5 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-2xl font-bold mb-5 text-white">
          トータルビューティー リレア
        </div>
        <div className="mb-10">
          <p className="mb-4">ご予約・お問い合わせはこちら</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://lin.ee/5N9K074"
              className="bg-[#06c755] text-white text-sm font-bold py-2.5 px-5 rounded-md transition-transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              公式LINE
            </a>
            <a
              href="https://beauty.hotpepper.jp/kr/slnH000500545/"
              className="bg-[#ff7700] text-white text-sm font-bold py-2.5 px-5 rounded-md transition-transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              HOT PEPPER
            </a>
          </div>
        </div>
        <nav className="my-10 py-10 border-t border-white/20 flex flex-wrap justify-center gap-x-8 gap-y-5">
          <Link href="/#treatment" className="hover:opacity-70">
            施術紹介
          </Link>
          <Link href="/#staff" className="hover:opacity-70">
            スタッフ紹介
          </Link>
          <Link href="/#voice" className="hover:opacity-70">
            お客様の声
          </Link>
          <Link href="/#column" className="hover:opacity-70">
            美容コラム
          </Link>
          <Link href="/#access" className="hover:opacity-70">
            店舗情報
          </Link>
        </nav>
        <div className="flex justify-center gap-5">
          <a
            href="https://www.instagram.com/relaxation_relair"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white transition-all hover:bg-white/20 hover:-translate-y-1"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://x.com/relair16"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white transition-all hover:bg-white/20 hover:-translate-y-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
        <p className="mt-10 text-xs opacity-70">
          &copy; 2025 トータルビューティー リレア. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
