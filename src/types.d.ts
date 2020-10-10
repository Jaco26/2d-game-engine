import { Loader } from "./loader";
import { AnimationManager } from './animation';
import { EventManager } from './events';
import { Brush } from './brush';

export interface GameCtx {
  events: EventManager,
  animation: AnimationManager,
  brush: Brush,
  camera: any,
  physics: any,
  loader: Loader,
  viewport: Viewport,
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

export interface GameConfig {
  canvasId: string,
  width: number,
  height: number,
  scene: Scene,
  viewport: Viewport,
}

export type GameEventHandler = (ctx: GameCtx, payolad: any) => void 
