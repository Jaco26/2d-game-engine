import {
  GameCtx,
  Scene,
  Viewport,
  GameConfig,
  GameEventHandler
} from './types'

import { EventManager } from './events'
import { Loader } from './loader'

export class Game {
  private animationHandle = null
  private state = {
    ready: false,
    gameOn: false,
  }
  private canvas: any
  private _ctx: CanvasRenderingContext2D
  private width: number
  private height: number
  private scene: Scene
  private viewport: Viewport
  
  private events = new EventManager()

  private loader = new Loader()

  constructor({ canvasId, width, height, scene, viewport }: GameConfig) {
    this.canvas = document.getElementById(canvasId)
    this._ctx = this.canvas.getContext('2d')
    this.width = width
    this.height = height
    this.scene = scene
    this.viewport = viewport

    this.canvas.width = viewport.width
    this.canvas.height = viewport.height
    
    this.init()
  }

  private async init() {
    await this.scene.preload(this.ctx)
    await this.scene.create(this.ctx)

    this.state.ready = true
  }

  get ctx(): GameCtx {
    return {
      events: 1,
      animation: 1,
      brush: {
        drawImage: (img: HTMLImageElement, x: number, y: number) => {
          this._ctx.beginPath()
          this._ctx.drawImage(img, x, y)
          this._ctx.closePath()
        },
        clearCanvas: () => {
          this._ctx.clearRect(0, 0, this.viewport.width, this.viewport.height)
        }
      },
      camera: 1,
      physics: 1,
      loader: this.loader
    }
  }

  frame() {
    this.scene.update(this.ctx)
  }

  play() {
    this.state.gameOn = true
    if (this.state.gameOn) {
      if (!this.state.ready) {
        setTimeout(() => {
          this.play()
        })
      } else {
        this.scene.update(this.ctx)
        this.animationHandle = requestAnimationFrame(this.play.bind(this))
      }
    } else {
      this.pause()
    }
  }

  pause() {
    cancelAnimationFrame(this.animationHandle)
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
