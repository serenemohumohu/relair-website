document.addEventListener("DOMContentLoaded", function () {
  // --- サイト共通の初期化処理 ---

  // 1. ハンバーガーメニュー
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("global-nav");
  const body = document.body;

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
      nav.classList.toggle("active");
      body.classList.toggle("no-scroll"); // スクロール禁止クラスをトグル
    });
  }

  // ▼▼▼【ここから追記】ナビゲーションリンククリックでメニューを閉じる処理 ▼▼▼
  const navLinks = document.querySelectorAll(".global-nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // メニューが開いている場合のみ閉じる処理を実行
      if (nav.classList.contains("active")) {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
        body.classList.remove("no-scroll"); // スクロール禁止クラスも解除
      }
    });
  });
  // ▲▲▲【追記ここまで】▲▲▲

  // 2. スクロールに応じたフェードインアニメーション
  const animatedElements = document.querySelectorAll(".anim-fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
    }
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  // --- トップページ固有の処理 ---
  if (document.querySelector(".mv-swiper")) {
    const mvSwiper = new Swiper(".mv-swiper", {
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  // --- 下層ページ固有の処理 ---
  const faqItems = document.querySelectorAll(".faq-item");
  if (faqItems.length > 0) {
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      question.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });
  }
});

