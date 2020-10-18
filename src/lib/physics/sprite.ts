import { DynamicObject, Rect, Circle } from './interfaces'
import { FiniteStateMachine } from '../state'

export class Sprite implements DynamicObject {
  dimensions: Rect | Circle
  
  states: FiniteStateMachine[] = []
  dx = 0
  dy = 0

  constructor(dimensions: Rect | Circle) {
    this.dimensions = dimensions
  }

  registerState(state: FiniteStateMachine) {
    this.states.push(state)
  }

  handleInput(input: string[]) {
    this.states.forEach(state => state.handleInput(input))
  }

  update() {
    this.states.forEach(state => state.update(this))
  }
}

export class RectSprite extends Sprite {
  constructor(dimensions: Rect) {
    super(dimensions)
  }
}


export class CircleSprite extends Sprite {
  constructor(dimensions: Circle) {
    super(dimensions)
  } 
}