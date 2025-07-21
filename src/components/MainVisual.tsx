"use client"; // このファイルがブラウザで動くことを示すおまじない

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";

// Swiper用のCSSをインポート
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// スライドの情報
const slides = [
  {
    sp: "/photo/1_sp.jpg",
    pc: "/photo/1.jpg",
    alt: "ウルトランスフォーマー痩身",
    title: "理想のボディラインへ\nウルトランスフォーマー痩身",
    text: "最新鋭のマシンで、気になる脂肪に徹底アプローチ",
  },
  {
    sp: "/photo/2_sp.jpg",
    pc: "/photo/2.jpg",
    alt: "オイルトリートメント",
    title: "心身を癒す極上の時間\nオイルトリートメント",
    text: "厳選されたオイルで、日々の疲れをリフレッシュ",
  },
  {
    sp: "/photo/3_sp.jpg",
    pc: "/photo/3.jpg",
    alt: "メンズ脱毛",
    title: "清潔感は、男の武器\nメンズ脱毛",
    text: "毎日の面倒な自己処理から解放され、自信のある肌へ",
  },
  {
    sp: "/photo/4_sp.jpg",
    pc: "/photo/4.jpg",
    alt: "骨盤矯正",
    title: "身体の土台を整える\n骨盤矯正",
    text: "不調の原因にアプローチし、健康的な毎日をサポート",
  },
  {
    sp: "/photo/5_sp.jpg",
    pc: "/photo/5.jpg",
    alt: "猫背矯正",
    title: "第一印象を変える\n猫背矯正",
    text: "美しい姿勢を手に入れ、颯爽とした立ち姿へ",
  },
];

const MainVisual = () => {
  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <>
                <div className="w-full h-full">
                  {/* PC用画像 */}
                  <Image
                    src={slide.pc}
                    alt={slide.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    className="hidden md:block brightness-60"
                    priority={index === 0}
                  />
                  {/* SP用画像 */}
                  <Image
                    src={slide.sp}
                    alt={slide.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    className="md:hidden brightness-60"
                    priority={index === 0}
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] text-white text-center">
                  <h2
                    className={`text-3xl md:text-5xl mb-4 text-shadow whitespace-pre-wrap transition-all duration-700 ease-out ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: isActive ? "300ms" : "0ms" }}
                  >
                    {slide.title}
                  </h2>
                  <p
                    className={`text-base md:text-lg text-shadow transition-all duration-700 ease-out ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: isActive ? "500ms" : "0ms" }}
                  >
                    {slide.text}
                  </p>
                </div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-white text-sm tracking-widest animate-scroll-down">
        <span>SCROLL</span>
      </div>
    </section>
  );
};

export default MainVisual;
