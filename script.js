document.addEventListener("DOMContentLoaded", function () {
  // Swiper (Main Visual Slider)
  const mvSwiper = new Swiper(".mv-swiper", {
    loop: true,
    effect: "fade",
    // ▼▼▼ クロスフェード効果を有効化 ▼▼▼
    fadeEffect: {
      crossFade: true,
    },
    // ▲▲▲ クロスフェード効果を有効化 ▲▲▲
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Hamburger Menu for Mobile
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("global-nav");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll(".global-nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // SPナビ内の予約ボタンはメニューを閉じない
      if (link.parentElement.classList.contains("nav-sp-buttons")) {
        return;
      }
      // 通常のナビリンクの場合はメニューを閉じる
      if (nav.classList.contains("active")) {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
      }
    });
  });
});
