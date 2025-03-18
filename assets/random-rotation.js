document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".image-container img").forEach((img) => {
    const randomRotation = (Math.random() * 10 - 5).toFixed(2); // Random between -5deg and +5deg
    img.style.transform = `rotate(${randomRotation}deg)`;
  });
});
