import {
  GameCtx,
  Scene,
  Viewport,
  GameConfig,
  GameEventHandler
} from './types'

import { EventManager } from './events'

export class Game {
  private canvas: any
  private _ctx: CanvasRenderingContext2D
  private width: number
  private height: number
  private scene: Scene
  private viewport: Viewport
  
  private events = new EventManager()

  constructor({ canvasId, width, height, scene, viewport }: GameConfig) {
    this.canvas = document.getElementById(canvasId)
    this._ctx = this.canvas.getContext('2d')
    this.width = width
    this.height = height
    this.scene = scene
    this.viewport = viewport

    this.canvas.width = viewport.width
    this.canvas.height = viewport.height
  }

  get ctx(): GameCtx {
    return {
      events: 1,
      animation: 1,
      brush: 1,
      camera: 1,
      physics: 1,
      loader: 1
    }
  }

  play() {
    return this.canvas
  }

  pause() {

  }

  reset() {

  }

  on(event: string, handler: GameEventHandler) {
    this.events.on(event, handler)
  }

  off(event: string) {
    this.events.off(event)
  }
}
