import { Predicate } from '../../lib/types'

export const shouldGoUp = (upKey: string, downKey: string): Predicate => ipt => (
  ipt.indexOf(upKey) > ipt.indexOf(downKey)
)

export const shouldGoDown = (upKey: string, downKey: string): Predicate => ipt => (
  ipt.indexOf(downKey) > ipt.indexOf(upKey)
)

export const shouldGoLeft = (leftKey: string, rightKey: string): Predicate => ipt => (
  ipt.indexOf(leftKey) > ipt.indexOf(rightKey)
)

export const shoudGoRight = (leftKey: string, rightKey: string): Predicate => ipt => (
  ipt.indexOf(rightKey) > ipt.indexOf(leftKey) 
)

export const spriteDidCollide = (spriteId: string): Predicate => ipt => (
  ipt.some(x => x.includes(spriteId) && x.includes('SPRITE_COLLISION') || x.includes('SPRITE_STATIC_OBJECT_COLLISION'))
)