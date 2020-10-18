export interface Rect {
  x: number,
  y: number,
  w: number,
  h: number,
}

export interface Circle {
  x: number,
  y: number,
  r: number,
}

export interface StaticObject {
  dimensions: Rect | Circle,
}

export interface DynamicObject {
  dimensions: Rect | Circle,
  dx: number,
  dy: number,
}

export interface CollisionDetector {
  rect: (r1: Rect, r2: Rect) => boolean,
  circle: (c1: Circle, c2: Circle) => boolean,
  rectCircle: (r: Rect, c: Circle) => boolean,
}