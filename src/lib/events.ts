
import { GameCtx, GameEventHandler } from './types'

export class EventManager {
  private listeners = {}
  private queue = []

  on(event: string, handler: GameEventHandler) {
    if (this.listeners[event]) {
      this.off(event)
    }
    this.listeners[event] = handler
  }

  off(event) {
    delete this.listeners[event]
  }

  emit(event: string, payload: any) {
    this.queue.unshift({ event, payload })
  }

  flushQueue(ctx: GameCtx) {
    while (this.queue.length) {
      const { event, payload } = this.queue.pop()
      if (typeof this.listeners[event] === 'function') {
        this.listeners[event](ctx, payload)
      } else {
        console.warn(`No listener registed for event: ${event}`)
      }
    }
  }
}