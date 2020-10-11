import { Game, Sprite } from './lib/index'

const sprite = new Sprite(200, 200)

sprite.ifInput('ArrowUp').then(self => {
  self.y -= 4
})
sprite.ifInput('ArrowDown').then(self => {
  self.y += 4
})
sprite.ifInput('ArrowRight').then(self => {
  self.x += 4
})
sprite.ifInput('ArrowLeft').then(self => {
  self.x -= 4
})

const game = new Game({
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
      sprite.handleInput(pressedKeys)
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



game.play()