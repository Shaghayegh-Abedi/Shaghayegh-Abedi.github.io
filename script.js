const canvas = document.getElementById("trail");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let spots = [];

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener("mousemove", (e) => {
  spots.push({ x: e.x, y: e.y, alpha: 1 });
});

function draw() {
  ctx.fillStyle = "rgba(11, 11, 32, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < spots.length; i++) {
    const s = spots[i];
    const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 100);
    gradient.addColorStop(0, `rgba(140, 100, 255, ${s.alpha})`);
    gradient.addColorStop(0.5, `rgba(255, 0, 200, ${s.alpha * 0.5})`);
    gradient.addColorStop(1, "transparent");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(s.x, s.y, 100, 0, Math.PI * 2);
    ctx.fill();

    s.alpha -= 0.02;
    if (s.alpha <= 0) spots.splice(i, 1);
  }
  requestAnimationFrame(draw);
}
draw();
