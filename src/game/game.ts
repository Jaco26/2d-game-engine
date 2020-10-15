import { Game, Sprite } from '../lib/index'
import { yAxisState, xAxisState } from './handle-input/state'

const sprite = new Sprite(200, 200)

export default new Game({
  canvasId: 'game-canvas',
  width: 2700,
  height: 1800,
  viewport: {
    x: 0,
    y: 0,
    width: 900,
    height: 600,
  },
  scene: {
    async preload({ loader }) {
      await loader.load('images/wifi.jpg')
    },
    create(ctx) {
      sprite.registerInputHandler(yAxisState)
      sprite.registerInputHandler(xAxisState)
    },
    update({ brush, loader, viewport, pressedKeys }) {
      sprite.handleInput(pressedKeys)
      sprite.update()
      brush.clearRect(viewport.x, viewport.y, viewport.width, viewport.height)
      brush.drawImage(loader.get('wifi'), sprite.x, sprite.y)
    },
  },
});
