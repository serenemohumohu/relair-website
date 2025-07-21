import Image from "next/image";

type HeroProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

const Hero = ({ title, subtitle, imageUrl }: HeroProps) => {
  return (
    // 背景色を濃い色にして、contain表示でも違和感ないようにします
    <section className="relative w-full h-[50vh] min-h-[350px] bg-[#2c3e50]">
      <Image
        src={imageUrl}
        alt={title}
        fill
        // ★ここを object-contain に変更！
        className="object-contain"
        priority
      />
      {/* object-containの場合はオーバーレイは不要なのでコメントアウト or 削除
      <div className="absolute inset-0 bg-primary-dark opacity-50"></div>
      */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-5 text-center text-white">
        <h1
          className="text-4xl font-bold tracking-wider md:text-5xl font-montserrat"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
        >
          {title}
        </h1>
        <p
          className="mt-2 text-lg md:text-xl"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default Hero;
