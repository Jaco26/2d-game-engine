
export class AnimationManager {
  private handle = null
  private callback: () => boolean

  constructor(callback: () => boolean) {
    this.callback = callback
  }

  play() {
    if (this.callback()) {
      this.handle = requestAnimationFrame(this.play.bind(this))
    } else {
      this.pause()
    }
  }

  pause() {
    cancelAnimationFrame(this.handle)
  }

  frame() {
    this.callback()
  }
}