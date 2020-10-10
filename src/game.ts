import {
  GameCtx,
  Scene,
  Viewport,
  GameConfig,
  GameEventHandler
} from './types'

import { EventManager } from './events'
import { AnimationManager } from './animation';
import { Loader } from './loader'
import { Brush } from './brush';

export class Game {

  private state = {
    ready: false,
    gameOn: false,
  }
  private canvas: any
  private canvasCtx: CanvasRenderingContext2D
  private width: number
  private height: number

  private scene: Scene
  private viewport: Viewport
  private animation: AnimationManager
  private brush: Brush
  
  private events = new EventManager()
  private loader = new Loader()



  constructor({ canvasId, width, height, scene, viewport }: GameConfig) {
    this.canvas = document.getElementById(canvasId)
    this.canvasCtx = this.canvas.getContext('2d')

    this.width = width
    this.height = height

    this.canvas.width = viewport.width
    this.canvas.height = viewport.height
  
    this.scene = scene
    this.viewport = viewport
    this.animation = new AnimationManager(() => {
      this.scene.update(this.ctx)
      this.events.flushQueue(this.ctx)
      return this.state.gameOn
    })
    this.brush = new Brush(this.canvasCtx)

    this.init()
  }

  private async init() {
    await this.scene.preload(this.ctx)
    this.scene.create(this.ctx)
    this.state.ready = true
  }

  get ctx(): GameCtx {
    return {
      events: this.events,
      animation: this.animation,
      brush: this.brush,
      camera: 1,
      physics: 1,
      loader: this.loader,
      viewport: this.viewport,
    }
  }

  frame() {
    this.animation.frame()
  }

  play(attempts = 0) {
    // probably much more elegant way to handle waiting for assets to load...
    if (attempts > 1000) throw new Error('Too many startup attempts')
    this.state.gameOn = true
    if (!this.state.ready) {
      attempts += 1
      setTimeout(() => { this.play(attempts) })
    } else {
      this.animation.play()
    }
  }

  pause() {
    this.state.gameOn = false
    this.animation.pause()
  }

  reset() {
    this.pause()
    this.scene.create(this.ctx)
  }

  on(event: string, handler: GameEventHandler) {
    this.events.on(event, handler)
  }

  off(event: string) {
    this.events.off(event)
  }
}
