document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".neon-title");

  title.addEventListener("click", () => {
    const hue = Math.random() * 360;
    title.style.color = `hsl(${hue}, 100%, 60%)`;
    title.style.textShadow = `
      0 0 5px hsl(${hue}, 100%, 60%),
      0 0 10px hsl(${hue}, 100%, 60%),
      0 0 15px hsl(${hue}, 100%, 60%),
      0 0 20px hsl(${hue}, 100%, 60%),
      0 0 35px hsl(${hue}, 100%, 60%),
      0 0 50px hsl(${hue}, 100%, 60%)
    `;
  });
});
