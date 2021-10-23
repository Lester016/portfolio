import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

const scrollToTarget = (id) => {
  const target = document.querySelector(`#${id}`);
  scroll.scrollTo(target);
};

document
  .getElementById("projectBtn")
  .addEventListener("click", () => scrollToTarget("projects"));
