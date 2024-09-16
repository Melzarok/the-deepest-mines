window.addEventListener("scroll", (e) => {
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
  document.body.style.cssText += `--scrollTopNum: ${this.scrollY}`;
  document.body.style.cssText += `--windowHeightNum: ${this.innerHeight}`;
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
});
