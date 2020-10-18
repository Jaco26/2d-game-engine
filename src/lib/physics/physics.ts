import { StaticObject, DynamicObject } from "./interfaces";
import { collisionDetector } from './collision-detector'
import { RectSprite } from './sprite'
import { EventManager } from "../events";

class Physics {
  staticObjects: StaticObject[] = []
  dynamicObjects: DynamicObject[] = []

  collision = collisionDetector

  addDynamicObject(x: DynamicObject) {
    this.dynamicObjects.push(x)
  }

  addStaticObject(x: StaticObject) {
    this.staticObjects.push(x)
  }

  didObjectsCollide(events: EventManager) {
    for (let i = 0; i < this.dynamicObjects.length; i++) {
      for (let j = 0; j < this.dynamicObjects.length; j++) {
        if (j === i) {
          continue
        }
        // check for collision
      }
      for (let j = 0; j < this.staticObjects.length; j++) {
        // check for collision
      }
    }
  }
}

const p = new Physics()

p.addDynamicObject(new RectSprite({ x: 33, y: 32, w: 23, h: 32 }))