import { collisionDetector } from './collision-detector'
import { Sprite } from './sprite'
import { StaticObject } from './static-object'
import { MessageQueue } from '../message-queue';

export class Physics {
  staticObjects: StaticObject[] = []
  sprites: Sprite[] = []

  private spriteIdIndexTable = {}

  collision = collisionDetector

  addSprite(x: Sprite) {
    this.sprites.push(x)
    this.spriteIdIndexTable[x.id] = this.sprites.length - 1
  }

  getSprite(id: string): Sprite {
    return this.sprites[this.spriteIdIndexTable[id]]
  }

  addStaticObject(x: StaticObject) {
    this.staticObjects.push(x)
  }

  update(messages: MessageQueue, input: string[]) {
    this.didObjectsCollide(messages)
    this.sprites.forEach(s => {
      s.handleInput('messages', messages.messages)
      s.handleInput('keyboard', input)
      s.update()
    })
  }

  didObjectsCollide(messages: MessageQueue) {

    const compared = {}

    for (let i = 0; i < this.sprites.length; i++) {
      const s1 = this.sprites[i]

      if (!compared[s1.id]) {
        compared[s1.id] = {}
      }

      for (let j = 0; j < this.sprites.length; j++) {
        const s2 = this.sprites[j]
        
        if (!compared[s2.id]) {
          compared[s2.id] = {}
        }

        if (i === j || compared[s1.id][s2.id] || compared[s2.id][s1.id]) {
          continue
        }

        if (this.collision.rect(s1.dimensions, s2.dimensions)) {
          messages.send(`SPRITE_COLLISION:${s1.id},${s2.id}`)
        }

        compared[s1.id][s2.id] = true
      }

      for (let j = 0; j < this.staticObjects.length; j++) {
        const o = this.staticObjects[j]

        if (compared[s1.id][o.id]) {
          continue
        }

        if (this.collision.rect(s1.dimensions, o.dimensions)) {
          messages.send(`SPRITE_STATIC_OBJECT_COLLISION:${s1.id},${o.id}`)
        }

        compared[s1.id][o.id] = true
      }
    }
  }


}
