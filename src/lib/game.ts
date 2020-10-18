import {
  GameCtx,
  Scene,
  Viewport,
  GameConfig,
  GameEventHandler,
} from './types'

import { EventManager } from './events'
import { AnimationManager } from './animation'
import { Loader } from './loader'
import { Brush } from './brush'
import { KeyboardInput } from './input'
import { MessageQueue } from './message-queue'
import { Physics } from './physics/physics'

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
  private keyboard = new KeyboardInput()
  private physics = new Physics()
  private messages = new MessageQueue()


  constructor({ canvasId, universe, viewport, scene }: GameConfig) {
    this.canvas = document.getElementById(canvasId)
    this.canvasCtx = this.canvas.getContext('2d')

    this.width = universe.width
    this.height = universe.height

    this.canvas.width = viewport.width
    this.canvas.height = viewport.height

    this.scene = scene
    this.viewport = viewport
    this.brush = new Brush(this.canvasCtx)
    this.animation = new AnimationManager(() => {
      this.scene.update(this.ctx)
      this.events.flushQueue(this.ctx)
      this.messages.clear()
      return this.state.gameOn
    })
  }

  async init() {
    await this.scene.preload(this.ctx)
    this.scene.create(this.ctx)
    this.keyboard.listen()
    this.state.ready = true
  }

  get ctx(): GameCtx {
    return {
      events: this.events,
      animation: this.animation,
      brush: this.brush,
      camera: 1,
      physics: this.physics,
      loader: this.loader,
      viewport: this.viewport,
      pressedKeys: this.keyboard.pressedKeys,
      messages: this.messages
    }
  }

  frame() {
    this.animation.frame()
  }

  play() {
    this.state.gameOn = true
    this.animation.play()
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
