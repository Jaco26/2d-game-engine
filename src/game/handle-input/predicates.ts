import { Predicate } from '../../lib/types'

export const shouldGoUp = (upKey: string, downKey: string): Predicate => ipt => (
  ipt.includes(upKey) && ipt.indexOf(upKey) > ipt.indexOf(downKey)
)

export const shouldGoDown = (upKey: string, downKey: string): Predicate => ipt => (
  ipt.includes(downKey) && ipt.indexOf(downKey) > ipt.indexOf(upKey)
)

export const shouldGoLeft = (leftKey: string, rightKey: string): Predicate => ipt => (
  ipt.includes(leftKey) && ipt.indexOf(leftKey) > ipt.indexOf(rightKey)
)

export const shoudGoRight = (leftKey: string, rightKey: string): Predicate => ipt => (
  ipt.includes(rightKey) && ipt.indexOf(rightKey) > ipt.indexOf(leftKey) 
)