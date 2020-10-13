import { SpriteState } from './types'

export class Sprite {
  x: number
  y: number
  states: SpriteState[] = []

  inputMap = {}
  dx = 0
  dy = 0
  fx = 0
  fy = 0

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  registerState(state: SpriteState) {
    this.states.push(state)
  }

  handleInput(ipt: string[]) {
    this.states = this.states.map(state => state.handleInput(this, ipt))
  }

  update() {
    this.states.forEach(state => state.update(this))
  }
}

