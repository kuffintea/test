// source/scripts/index.js
var mb = document.querySelector(".main-header__nav-toggle");
var m = document.querySelector(".main-header__nav-list");
mb.onclick = function() {
  m.classList.toggle("main-header__nav-list--show");
};
var init = false;
var swiper;
function swiperInit() {
  if (window.innerWidth <= 1199) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        autoplay: {
          delay: 5e3
        },
        slideActiveClass: "plans__item--active",
        direction: "horizontal",
        loop: true,
        setWrapperSize: true,
        pagination: {
          el: ".swiper-pagination",
          bulletActiveClass: "plans__item--active",
          type: "bullets",
          clickable: true
        }
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperInit();
window.addEventListener("resize", swiperInit);
var end = new Date((/* @__PURE__ */ new Date()).getTime() + 10 * 6e4);
var _second = 1e3;
var _minute = _second * 60;
var _hour = _minute * 60;
var timer;
var timerMinutes = document.getElementById("timer-minutes");
var timerSeconds = document.getElementById("timer-seconds");
function showRemaining() {
  let now = /* @__PURE__ */ new Date();
  let distance = end - now;
  if (distance < 0) {
    end = new Date((/* @__PURE__ */ new Date()).getTime() + 10 * 6e4);
    return;
  }
  let minutes = Math.floor(distance % _hour / _minute);
  let seconds = Math.floor(distance % _minute / _second);
  timerMinutes.innerHTML = minutes.toString().padStart(2, "0");
  timerSeconds.innerHTML = seconds.toString().padStart(2, "0");
}
timer = setInterval(showRemaining, 1e3);
var scroll = 0;
function MoveBackground() {
  let toTop = this.scrollY > scroll ? false : true;
  scroll = this.scrollY;
  let bg = window.getComputedStyle(document.body).getPropertyValue("background-position-y");
  let arr = bg.split(",");
  let bgRight = parseInt(arr[0].replace("%", ""), 10);
  let bgLeft = parseInt(arr[1].replace("%", ""), 10);
  let offsetRight = toTop ? bgRight - 5 : bgRight + 5;
  let offsetLeft = toTop ? bgLeft - 5 : bgLeft + 5;
  document.body.style.backgroundPosition = `3% ${offsetRight}%, right ${offsetLeft}%`;
}
window.addEventListener("scroll", function() {
  MoveBackground();
});
//# sourceMappingURL=index.js.map
