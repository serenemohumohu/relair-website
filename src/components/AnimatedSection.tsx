"use client";

import { useInView } from "react-intersection-observer";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const AnimatedSection = ({
  children,
  className = "",
  id,
}: AnimatedSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // アニメーションを1回だけ実行する
    threshold: 0.2, // 要素が20%見えたら実行する
    rootMargin: "-50px 0px", // 画面の下50pxくらいで反応させる
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
