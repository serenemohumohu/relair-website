import Link from "next/link";

const CtaBar = () => {
  return (
    <section className="py-5 bg-primary-dark text-white">
      <div className="container flex flex-col items-center justify-between gap-4 px-5 mx-auto md:flex-row">
        <p className="text-xl font-bold text-center md:text-2xl">
          <span className="text-secondary">ヒゲ脱毛 初回限定</span>
          <span className="ml-4 font-montserrat">¥550</span>
        </p>
        <Link
          href="https://beauty.hotpepper.jp/kr/slnH000500545/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 font-bold text-white transition-transform duration-300 rounded-full bg-recruit-red hover:scale-105"
        >
          今すぐ初回体験を予約する
        </Link>
      </div>
    </section>
  );
};

export default CtaBar;
