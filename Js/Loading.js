console.log('entre XD');

let stars = document.querySelectorAll("#star");

stars.forEach((star) => {
  let duration = Math.random() * (1.2 - 0.6) + 0.6;
  console.log(duration);
  star.style.animation = `star ${duration}s infinite linear`;
});

window.addEventListener("load", () => {
    console.log("load");
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preload-finish");
});