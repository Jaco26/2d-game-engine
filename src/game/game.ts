import { Game, Sprite } from '../lib/index'
import parser from './handle-input/index'

const sprite = new Sprite(200, 200)

export default new Game({
  canvasId: 'game-canvas',
  width: 2700,
  height: 1800,
  scene: {
    async preload({ loader }) {
      await loader.load('images/wifi.jpg')
    },
    create(ctx) {

    },
    update({ brush, loader, viewport, pressedKeys }) {
      parser.parseInput(pressedKeys).forEach(command => command(sprite))
      brush.clearRect(viewport.x, viewport.y, viewport.width, viewport.height)
      brush.drawImage(loader.get('wifi'), sprite.x, sprite.y)
    },
  },
  viewport: {
    x: 0,
    y: 0,
    width: 900,
    height: 600,
  }
});
