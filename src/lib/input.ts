

export class KeyboardInput {

  pressedKeys: string[] = []

  listen() {
    window.addEventListener('keydown', this.pushKeys.bind(this))
    window.addEventListener('keyup', this.spliceKeys.bind(this))
  }

  stopListening() {
    window.removeEventListener('keydown', this.pushKeys.bind(this))
    window.removeEventListener('keyup', this.spliceKeys.bind(this))
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
