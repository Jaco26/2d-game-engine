import { Rect } from './interfaces'
import { FiniteStateMachine } from '../state'
import { StaticObject } from './static-object'

export class Sprite extends StaticObject {
  states: FiniteStateMachine[] = []
  dx = 0
  dy = 0

  constructor(dimensions: Rect) {
    super(dimensions)
  }

  registerState(state: FiniteStateMachine) {
    this.states.push(state)
  }

  handleInput(source: string, input: string[]) {
    this.states.forEach(state => state.handleInput(source, this.id, input))
  }

  update() {
    this.states.forEach(state => state.update(this))
  }
}

