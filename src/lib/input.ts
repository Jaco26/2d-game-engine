import { Command, Predicate } from './types'

export class KeyboardInput {

  pressedKeys: string[] = []

  listen() {
    window.addEventListener('keydown', e => this.pushKeys(e))
    window.addEventListener('keyup', e => this.spliceKeys(e))
  }

  stopListening() {
    window.removeEventListener('keydown', e => this.pushKeys(e))
    window.removeEventListener('keyup', e => this.spliceKeys(e))
  }

  private pushKeys(e: KeyboardEvent) {
    if (!this.pressedKeys.includes(e.key)) {
      this.pressedKeys.push(e.key)
    }
  }

  private spliceKeys(e: KeyboardEvent) {
    if (this.pressedKeys.includes(e.key)) {
      this.pressedKeys.splice(this.pressedKeys.indexOf(e.key), 1)
    }
  }
}

