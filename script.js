const canvas = document.getElementById("trail");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let spots = [];
let hue = 0;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener("mousemove", (e) => {
  spots.push({ x: e.x, y: e.y, alpha: 1, hue: hue });
  hue += 8; // shifts color along the spectrum
  if (hue > 360) hue = 0;
});

function draw() {
  // slight fade effect for smooth trails
  ctx.fillStyle = "rgba(11, 11, 32, 0.15)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < spots.length; i++) {
    const s = spots[i];
    const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 40);

    // multiple hues for color variation
    gradient.addColorStop(0, `hsla(${s.hue}, 100%, 70%, ${s.alpha})`);
    gradient.addColorStop(0.3, `hsla(${(s.hue + 60) % 360}, 100%, 60%, ${s.alpha * 0.7})`);
    gradient.addColorStop(1, "transparent");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(s.x, s.y, 40, 0, Math.PI * 2);
    ctx.fill();

    s.alpha -= 0.03; // faster fade for thinner effect
    if (s.alpha <= 0) spots.splice(i, 1);
  }

  requestAnimationFrame(draw);
}

draw();
