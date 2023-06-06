const carousel = document.querySelector(".carousel");
let isDragging = false;
let startPos = 0;
let currentPos = 0;

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startPos = e.pageX - carousel.offsetLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  e.preventDefault(); // Prevent default text selection behavior
  currentPos = e.pageX - carousel.offsetLeft;
  const scrollPos = currentPos - startPos;
  carousel.scrollLeft = carousel.scrollLeft - scrollPos;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);

// Additional event listeners to handle mouseup and mouseleave events
document.addEventListener("mouseup", () => {
  isDragging = false;
});

carousel.addEventListener("mouseleave", () => {
  isDragging = false;
});
