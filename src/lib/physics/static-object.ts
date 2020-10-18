import { randomId } from "../util";
import { Rect } from "./interfaces";

export class StaticObject {
  dimensions: Rect
  image?: string
  fillStyle?: string
  strokeStyle?: string

  id = randomId()

  constructor(dimensions: Rect) {
    this.dimensions = dimensions
  }
}