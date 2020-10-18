import { Loader } from "./loader";
import { AnimationManager } from './animation';
import { EventManager } from './events';
import { Brush } from './brush';
import { Sprite } from './physics/sprite'
import { Physics } from "./physics/physics";
import { MessageQueue } from "./message-queue";


export type Command = (sprite: Sprite) => void
export type Predicate = (input: string[]) => boolean

export interface GameCtx {
  events: EventManager,
  animation: AnimationManager,
  brush: Brush,
  camera: any,
  physics: Physics,
  loader: Loader,
  viewport: Viewport,
  pressedKeys: string[],
  messages: MessageQueue,
}

export interface Scene {
  preload: (ctx: GameCtx) => void,
  create: (ctx: GameCtx) => void,
  update: (ctx: GameCtx) => void,
}

export interface Viewport {
  x: number,
  y: number,
  width: number,
  height: number,
}

export interface Universe {
  width: number,
  height: number,
}

export interface GameConfig {
  canvasId: string,
  universe: Universe,
  viewport: Viewport,
  scene: Scene,
  
}

export interface SpriteState {
  data?: any,
  handleInput: (
    source: string,
    spriteId: string,
    input: string[],
    setState: (newState: string) => void,
  ) => void,
  update: (sprite: Sprite) => void
}

export type GameEvent = { event: string, payload: any }
export type GameEventHandler = (ctx: GameCtx, payolad: any) => void 
