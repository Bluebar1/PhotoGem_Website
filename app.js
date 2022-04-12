window.addEventListener("resize", function() {
  if (window.innerWidth > 568) {
    const sections = document.querySelectorAll("section");
    const bubble = document.querySelector(".bubble");
    const gradients = [
      "linear-gradients(to right top, #f46b45, #eea849)",
      "linear-gradients(to right top, #005c97, #363795)",
      "linear-gradients(to right top, #e53935, #e35d5b)"
    ];

    const options = {
      threshold: 0.7
    };

    let observer = new IntersectionObserver(navCheck, options);

    function navCheck(entries) {
      entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute("data-index");
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
          height: coords.height,
          width: coords.width,
          top: coords.top,
          left: coords.left
        };
        if (entry.isIntersecting) {
          bubble.style.setProperty("left", `${directions.left}px`); //+10 moves it to the right
          bubble.style.setProperty("top", `${directions.top + 13}px`); //+10 moves it down 10px
          bubble.style.setProperty("width", `${directions.width}px`); //+10 extends the right out 10px
          bubble.style.setProperty("height", `${directions.height}px`); //+10 extends the bottom out
        }
      });
    }

    sections.forEach(section => {
      observer.observe(section);
    });
  }
});
