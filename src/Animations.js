export function slideIn() {
  // Select all .Slide elems and fade in on view
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
  // Set up an observer on #PageContentTray
  // On window intersection (in view), move Three.js Fiber canvas
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
  // FOr use in Gallery page to toggle top nav in/out of view
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
