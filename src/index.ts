import { Game } from './game'

const game = new Game({
  canvasId: 'game-canvas',
  width: 2700,
  height: 1800,
  scene: {
    preload({ loader }) {

    },
    create(ctx) {

    },
    update(ctx) {

    },
  },
  viewport: {
    x: 0,
    y: 0,
    width: 900,
    height: 600,
  }
})


game.on('hello', (ctx, payload) => {

})