import game from './game/game'

(async () => {
  await game.init()
  game.play()
})()

