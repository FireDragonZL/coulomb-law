import * as vector from "./vector";

class Ball {
  x: number = 0;
  y: number = 0;
  p = vector.create(0, 0);
  radius: number = 20;
  ctx: CanvasRenderingContext2D;
  fillStyle: string = "red";
  e: number = 5;
  f = vector.create(0, 0);
  speed = vector.create(0, 0);
  friction = 1;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }
  handleBoundary() {
    if (
      this.p[0] - this.radius < 0 ||
      this.p[0] + this.radius > 600 ||
      this.p[1] - this.radius < 0 ||
      this.p[1] + this.radius > 600
    ) {
      this.speed = vector.negate(this.speed, this.speed);
    }
  }
  render() {
    const ctx = this.ctx;
    this.speed = vector.add(this.speed, this.speed, this.f);

    this.speed = vector.scale(this.speed, this.speed, this.friction);

    this.handleBoundary();

    this.p = vector.add(this.p, this.p, this.speed);
    ctx.save();
    ctx.translate(this.p[0], this.p[1]);
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.fillStyle;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}

export default Ball;
