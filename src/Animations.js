export function slideIn() {
  const observer = new IntersectionObserver((elems) => {
    elems.forEach((el) => {
      if (el.isIntersecting) {
        el.target.classList.add("Slide");
      } else {
        //only animate on first intersection; do nothing.
        //el.target.classList.remove("Slide");
      }
    });
  });

  const elements = document.querySelectorAll(".SlideElem");
  elements.forEach((el) => {
    observer.observe(el);
  });
}

export function shiftTorusOnScroll() {
  const TorusCanvas = document.querySelector("#TorusCanvas");
  const PageContentTray = document.querySelector("#PageContentTray");

  const observer = new IntersectionObserver(
    (elems) => {
      elems.forEach((el) => {
        if (el.isIntersecting) {
          TorusCanvas.classList.add("Shift");
        } else {
          TorusCanvas.classList.remove("Shift");
        }
      });
    },
    { rootMargin: "-50px" }
  );

  observer.observe(PageContentTray);
}

export function GalleryNavToggle() {
  const GalleryHero = document.querySelector("#GalleryHero");
  const GalleryTopNav = document.querySelector("#GalleryTopNav");

  const observer = new IntersectionObserver(
    (elems) => {
      elems.forEach((el) => {
        if (el.isIntersecting) {
          GalleryTopNav.classList.add("HiddenNav");
        } else {
          GalleryTopNav.classList.remove("HiddenNav");
        }
      });
    },
    { rootMargin: "20px" }
  );

  observer.observe(GalleryHero);
}
