document.addEventListener("DOMContentLoaded", function () {
    // --- Swiper (Main Visual Slider) ---
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
        // 読み込み時にキャプションアニメーションをリセットするため
        on: {
            init: function () {
                const activeSlide = this.slides[this.activeIndex];
                activeSlide.querySelector('.slide-caption h2').style.opacity = '0';
                activeSlide.querySelector('.slide-caption p').style.opacity = '0';
            },
            slideChangeTransitionStart: function () {
                // スライドが切り替わる前に全キャプションを非表示に
                this.slides.forEach(slide => {
                    slide.querySelector('.slide-caption h2').style.opacity = '0';
                    slide.querySelector('.slide-caption p').style.opacity = '0';
                    slide.querySelector('.slide-caption h2').style.transform = 'translateY(20px)';
                    slide.querySelector('.slide-caption p').style.transform = 'translateY(20px)';
                });
            },
            slideChangeTransitionEnd: function () {
                // アクティブなスライドのキャプションのみ表示
                const activeSlide = this.slides[this.activeIndex];
                activeSlide.querySelector('.slide-caption h2').style.opacity = '1';
                activeSlide.querySelector('.slide-caption p').style.opacity = '1';
                activeSlide.querySelector('.slide-caption h2').style.transform = 'translateY(0)';
                activeSlide.querySelector('.slide-caption p').style.transform = 'translateY(0)';
            }
        }
    });

    // --- Hamburger Menu for Mobile ---
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("global-nav");
    const body = document.body;

    hamburger.addEventListener("click", function () {
        this.classList.toggle("active");
        nav.classList.toggle("active");
        body.classList.toggle("no-scroll"); // 背景のスクロールを禁止
    });

    // メニュー内のリンククリックでメニューを閉じる
    const navLinks = document.querySelectorAll(".global-nav a");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (nav.classList.contains("active")) {
                hamburger.classList.remove("active");
                nav.classList.remove("active");
                body.classList.remove("no-scroll");
            }
        });
    });

    // --- Scroll Animation (Fade In) ---
    const targets = document.querySelectorAll(".anim-fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // isIntersectingプロパティで、要素がビューポートに入ったか判定
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                // 一度表示されたら監視を停止
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: "0px", // ビューポートの境界
        threshold: 0.1   // 要素が10%見えたらトリガー
    });

    // 各ターゲット要素を監視
    targets.forEach(target => {
        observer.observe(target);
    });
});
