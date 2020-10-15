import { FiniteStateMachine } from './state'

export class Sprite {
  x: number
  y: number
  inputHandlers: FiniteStateMachine[] = []

  dx = 0
  dy = 0
  fx = 0
  fy = 0

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  registerInputHandler(state: FiniteStateMachine) {
    this.inputHandlers.push(state)
  }

  handleInput(input: string[]) {
    this.inputHandlers.forEach(state => state.handleInput(input))
  }

  update() {
    this.inputHandlers.forEach(state => state.update(this))
  }
}

