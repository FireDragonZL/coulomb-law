import * as vector from "./vector";

class Line {
  ctx: CanvasRenderingContext2D;
  angle = 0;
  strokeStyle = "white";
  ps = vector.create(0, 0);
  length = 200;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }
  render() {
    const ctx = this.ctx;

    ctx.save();
    ctx.translate(this.p[0], this.p[1]);
    ctx.rotate(this.angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.length, 0);
    ctx.strokeStyle = this.strokeStyle;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }
}

export default Line;
