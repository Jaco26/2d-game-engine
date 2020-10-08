export interface GameCtx {
  events: any,
  animation: any,
  brush: any,
  camera: any,
  physics: any,
  loader: any
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
