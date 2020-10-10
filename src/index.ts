import { Game } from './game'

const coords = {x: 320, y: 300}

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
    update({ brush, loader }) {
      brush.clearCanvas()
      brush.drawImage(loader.get('wifi'), coords.x, coords.y)
      coords.x += 1
      coords.y -= 1
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