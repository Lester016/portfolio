import LocomotiveScroll from "locomotive-scroll";

if (module.hot) {
  module.hot.dispose(function (data) {
    // module is about to be replaced.
    // You can save data that should be accessible to the new asset in `data`
    data.updated = Date.now();
  });

  module.hot.accept(function (getParents) {
    // module or one of its dependencies was just updated.
    // data stored in `dispose` is available in `module.hot.data`
    let { updated } = module.hot.data;
  });
}

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
