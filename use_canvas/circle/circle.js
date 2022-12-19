var ca = document.getElementById("whiteBoard");
ca.style.border = "white 5px solid";
// Canvas - learning
var ctx = ca.getContext("2d");
ctx.translate(50, 50);
function draw(radius) {
  ctx.clearRect(-50, -50, ca.clientWidth, ca.clientHeight);
  for (let a = 0; a < 6; a++) {
    ctx.rotate((2 * Math.PI) / 6);
    drawRound(radius);
  }
}
x = 0;
setInterval(() => {
  x = x + 0.05;
  radius = 25 * Math.abs(Math.sin(x));
  draw(radius);
}, 100);

function drawRound(radius) {
  ctx.beginPath();
  ctx.arc(0, radius, radius * 0.2, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke();
}
