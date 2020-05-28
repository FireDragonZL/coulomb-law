import Ball from "./Ball";
// import Line from "./Line";
import * as vector from "./vector";
import * as utils from "./utils";

const canvas = document.getElementById("app") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const center = vector.create(canvas.width / 2, canvas.height / 2);

const color = ["red", "#a8d8ea", "#aa96da", "#fcbad3", "#ffffd2"];
const balls: Ball[] = [];

for (let i = 0; i < 5; ++i) {
  const ball = new Ball(ctx);

  const d = vector.create(
    // 10*i,
    // -10*i
    Math.floor(Math.random() * 100) - 50,
    Math.floor(Math.random() * 100) - 50
  );
  ball.p = vector.add(ball.p, d, center);

  ball.fillStyle = color[i];
  ball.render();
  balls.push(ball);
}

// const line = new Line(ctx);

function refreshNodes(balls: Ball[]) {
  utils.getAllPossibleCombinations(balls.length).forEach(item => {
    const b0 = balls[item[0]];
    const b1 = balls[item[1]];
    const v12 = vector.create(0, 0);

    let forceDirection = vector.sub(v12, b0.p, b1.p);
    forceDirection = vector.getSign(forceDirection);

    const delta = vector.sub(v12, b0.p, b1.p);
    const r2 = vector.mul(v12, delta, delta);
    const q0q1 = vector.create(b0.e * b1.e, b0.e * b1.e);
    const k = vector.create(0.1, 0.1);
    let f = vector.mul(v12, k, vector.div(v12, q0q1, r2));
    f = vector.limit(f, -0.1, 0.1);

    b0.f = vector.mul(vector.create(0, 0), f, forceDirection);
    b1.f = vector.mul(
      vector.create(0, 0),
      f,
      vector.negate(vector.create(0, 0), forceDirection)
    );

    b0.render();
    b1.render();
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  refreshNodes(balls);
  requestAnimationFrame(draw);
}
draw();
