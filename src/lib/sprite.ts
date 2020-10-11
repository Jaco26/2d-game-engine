import { Command } from './types'

export class Sprite {
  x: number
  y: number

  inputMap = {}
  dx = 0
  dy = 0
  fx = 0
  fy = 0

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  ifInput(x: string) {
    return {
      then: (command: Command) => {
        this.inputMap[x] = () => command(this)
      }
    }
  }

  handleInput(input: string[]) {
    for (let i = 0; i < input.length; i++) {
      const char = input[i]
      this.inputMap[char] && this.inputMap[char]()
    }
  }
}

