canvas = document.querySelector("canvas");

context = canvas.getContext("2d");

let height = window.innerHeight;
let width = window.innerWidth;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let time = 0;
let mousePosX = 20;
let currentX = 0;
let currentY = -10;
const numberSnow = (height * 2) / 3;
let animationID;

const arrayX = [];
const arrayY = [];

for (let i = 0; i < numberSnow / 2; i++) {
  randX = Math.random() * width * 3 - width;
  arrayX.push(randX);
  arrayX.push(randX);

  arrayY.push(Math.random() * height * 1.3 - height * 1.3);
  arrayY.push(Math.random() * height * 1.3 - height * 1.3);
}

const smallSnow = (x, y, size, opacity) => {
  context.beginPath();
  context.arc(x, y, 5, 0, size * Math.PI, false);
  context.fillStyle = "white";
  context.globalAlpha = opacity;
  return context.fill();
};

function Animation() {
  context.clearRect(0, 0, width, height);

  for (let i = 0; i < numberSnow; i++) {
    let toX = (mousePosX - arrayX[i]) / 700;
    arrayX[i] += toX;
    arrayY[i] += 2;
    if (arrayY[i] > height) {
      arrayY[i] = Math.random() * height * 1.3 - height * 1.3;
      arrayX[i] = Math.random() * width * 3 - width;
    }
    smallSnow(arrayX[i], arrayY[i], 5, 1 - (arrayY[i] / height) * 0.8);
  }
  context.beginPath();
  context.font = "50px Nanum Pen Script";
  context.fillText("첫눈오는 추운 겨울", 50, 100);
  context.fillText("  화이팅이에요", 50, 200);

  animationID = requestAnimationFrame(Animation);
}

Animation();

document.addEventListener("mousemove", (e) => {
  mousePosX = e.offsetX;
});
