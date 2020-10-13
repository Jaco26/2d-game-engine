import { SpriteState } from '../../lib/types'
import { Sprite } from '../../lib/sprite'

import * as pdct from './predicates'
import * as btn from './buttons'

const isRightPressed = pdct.shoudGoRight(btn.ARROW_LEFT, btn.ARROW_RIGHT)
const isLeftPressed = pdct.shouldGoLeft(btn.ARROW_LEFT, btn.ARROW_RIGHT)
const isDownPressed = pdct.shouldGoDown(btn.ARROW_UP, btn.ARROW_DOWN)
const isUpPressed = pdct.shouldGoUp(btn.ARROW_UP, btn.ARROW_DOWN)


export class MovingUp implements SpriteState {
  handleInput(s: Sprite, ipt: string[]) {
    if (isUpPressed(ipt)) return this
    if (isDownPressed(ipt)) return new MovingDown()
    return new YStationary()
  }
  update(s: Sprite) {
    s.y -= 2
  }
}

export class MovingDown implements SpriteState {
  handleInput(s: Sprite, ipt: string[]) {
    if (isDownPressed(ipt)) return this
    if (isUpPressed(ipt)) return new MovingUp()
    return new YStationary()
  }
  update(s: Sprite) {
    s.y += 2
  }
}

export class YStationary implements SpriteState {
  handleInput(s: Sprite, ipt: string[]) {
    if (isUpPressed(ipt)) return new MovingUp()
    if (isDownPressed(ipt)) return new MovingDown()
    return this
  }
  update(s: Sprite) {

  }
}



export class MovingLeft implements SpriteState {
  handleInput(s: Sprite, ipt: string[]) {
    if (isLeftPressed(ipt)) return this
    if (isRightPressed(ipt)) return new MovingRight()
    return new XStationary()
  }
  update(s: Sprite) {
    s.x -= 2
  }
}

export class MovingRight implements SpriteState {
  handleInput(s: Sprite, ipt: string[]) {
    if (isRightPressed(ipt)) return this
    if (isLeftPressed(ipt)) return new MovingLeft()
    return new XStationary()
  }
  update(s: Sprite) {
    s.x += 2
  }
}

export class XStationary implements SpriteState {
  handleInput(s: Sprite, ipt: string[]) {
    if (isRightPressed(ipt)) return new MovingRight()
    if (isLeftPressed(ipt)) return new MovingLeft()
    return this
  }
  update(s: Sprite) {

  }
}