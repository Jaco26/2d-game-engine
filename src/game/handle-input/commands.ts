import { Command } from '../../lib/types'

export const goUp: Command = sprite => {
  sprite.y -= 2
}


export const goDown: Command = sprite => {
  sprite.y += 2
}

export const goLeft: Command = sprite => {
  sprite.x -= 2
}

export const goRight: Command = sprite => {
  sprite.x += 2
}