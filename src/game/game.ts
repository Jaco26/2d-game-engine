import { Game, Sprite, StaticObject } from '../lib/index'
import { yAxisState, xAxisState, makeCollisionState } from './handle-input/state'

const UNIVERSE_WIDTH = 900
const UNIVERSE_HEIGHT = 600

export default new Game({
  canvasId: 'game-canvas',
  universe: {
    width: UNIVERSE_WIDTH,
    height: UNIVERSE_HEIGHT,
  },
  viewport: {
    x: 0,
    y: 0,
    width: UNIVERSE_WIDTH,
    height: UNIVERSE_HEIGHT,
  },
  scene: {
    async preload({ loader }) {
      await loader.load('images/wifi.jpg')
    },
    create({ physics, events }) {

      const s1 = new Sprite({ x: 200, y: 200, w: 25, h: 25 })
      const s2 = new Sprite({ x: 300, y: 200, w: 25, h: 25 })
      const s3 = new Sprite({ x: 400, y: 200, w: 25, h: 25 })

      const wallTop = new StaticObject({ x: 0, y: 0, w: UNIVERSE_WIDTH, h: 1 })
      const wallRight = new StaticObject({ x: UNIVERSE_WIDTH - 1, y: 0, w: 1, h: UNIVERSE_HEIGHT })
      const wallBottom = new StaticObject({ x: 0, y: UNIVERSE_HEIGHT - 1, w: UNIVERSE_WIDTH, h: 1 })
      const wallLeft = new StaticObject({ x: 0, y: 0, w: 1, h: UNIVERSE_HEIGHT })

      s1.registerState(xAxisState)
      s1.registerState(yAxisState)
      s1.registerState(makeCollisionState())


      s1.fillStyle = 'green'
      s2.fillStyle = 'green'
      s3.fillStyle = 'green'

      physics.addStaticObject(wallTop)
      physics.addStaticObject(wallRight)
      physics.addStaticObject(wallBottom)
      physics.addStaticObject(wallLeft)
      physics.addSprite(s1)
      physics.addSprite(s2)
      physics.addSprite(s3)
    },
    update({ brush, loader, messages, viewport, physics, events, pressedKeys }) {
      brush.clearRect(viewport.x, viewport.y, viewport.width, viewport.height)

      physics.update(messages, pressedKeys)

      physics.staticObjects.forEach(({ dimensions: d }) => {
        brush
          .rect(d.x, d.y, d.w, d.h)
          .fill('gray')
      })

      physics.sprites.forEach(({ dimensions: d, fillStyle }) => {
        brush
          .rect(d.x, d.y, d.w, d.h)
          .fill(fillStyle)
      })

    },
  },
});
