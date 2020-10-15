import { Sprite } from './sprite'
import { SpriteState } from './types'

export class FiniteStateMachine {
  private state: string
  private stateHandlers: { [key: string]: SpriteState }

  constructor(initialState: string, stateHandlers: { [key: string]: SpriteState }) {
    this.state = initialState
    this.stateHandlers = stateHandlers
  }

  private setState(newState: string) {
    this.state = newState
  }

  handleInput(input: string[]) {
    this.stateHandlers[this.state].handleInput((newState: string) => this.setState(newState), input)
  }

  update(sprite: Sprite) {
    this.stateHandlers[this.state].update(sprite)
  }
}
