import { Point } from './types';
export class Creator {
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class LineProduct {
    /**
     *
     */
    constructor(p0, p1, ctx) {
        this.ctx = ctx;
        this.p0 = p0;
        this.p1 = p1;
    }
    operation() {
        this.ctx.save();
        ///this.ctx.scale(1, -1);
        this.ctx.beginPath();
        this.ctx.moveTo(this.p0.x(), this.p0.y());
        this.ctx.lineTo(this.p1.x(), this.p1.y());
        this.ctx.stroke();
        // this.arrow(this.p1, this.ctx);
        // this.ctx.stroke();
        return this;
    }
    arrow(p, ctx) {
        ctx.beginPath();
        ctx.moveTo(p.x(), p.y());
        ctx.lineTo(p.x() + 25, p.y() + 25);
        ctx.lineTo(p.x() + 25, p.y() - 25);
        ctx.fill();
    }
}
export class LineBuilder {
    constructor() {
        this.p0 = new Point(0, 0);
        this.p1 = new Point(0, 0);
    }
    WithP0(p0) {
        this.p0 = p0;
        return this;
    }
    WithP1(p1) {
        this.p1 = p1;
        return this;
    }
}
//# sourceMappingURL=creator.js.map