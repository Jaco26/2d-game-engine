import { CollisionDetector } from './interfaces'

export const collisionDetector: CollisionDetector = {
  rect: (r1, r2) => true,
  circle: (c1, c2) => true,
  rectCircle: (r, c) => true,
}