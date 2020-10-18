import { Circle, Rect } from './interfaces'

export const collisionDetector = {
  rect: (r1: Rect, r2: Rect) => (
    r1.x + r1.w >= r2.x && // rightR1 to right of leftR2
    r1.x <= r2.x + r2.w && // leftR1 to left of rightR2
    r1.y + r1.h >= r2.y && // bottomR1 below topR2
    r1.y <= r2.y + r2.h    // topR1 above bottomR2
  ),
  circle: (c1: Circle, c2: Circle) => {
    const distX = c1.x - c2.x
    const distY = c1.y - c2.y
    const distance = Math.sqrt(distX**2 + distY**2)
    return distance <= c1.r + c2.r
  },
  rectCircle: (r: Rect, c: Circle) => {
    // which edge of r is closest to c
    let testX = c.x
    let testY = c.y
    if (c.x < r.x) {
      testX = r.x
    } else if (c.x >= r.x + r.w) {
      testX = r.x + r.w
    }
    if (c.y < r.y) {
      testY = r.y
    } else if (c.y >= r.y + r.h) {
      testY = r.y + r.h
    }
    const distX = c.x - testX
    const distY = c.y - testY
    const distance = Math.sqrt(distX**2 + distY**2)
    return distance <= c.r
  },
}
