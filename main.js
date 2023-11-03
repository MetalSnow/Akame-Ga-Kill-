// navbar

const navbarEl = document.querySelector(".navbar");
const h3El = document.querySelector("h3");
const liEl = document.querySelectorAll("li");

window.addEventListener("scroll", () => {
  if (window.scrollY >= "858") {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});

// video trailer

const btnEl = document.querySelector(".btn");
const closeIcon = document.querySelector(".close-icon");
const videoEl = document.querySelector(".video-container");
const video = document.querySelector("video");

btnEl.addEventListener("click", () => {
  videoEl.classList.remove("active");
  video.play();
});

closeIcon.addEventListener("click", () => {
  videoEl.classList.add("active");
  video.pause();
  video.currentTime = 0;
});

// go back btn

const backTop = document.querySelector(".back");

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
