import { InputParser } from '../../lib/index'

import {
  goDown,
  goLeft,
  goRight,
  goUp
} from './commands'

import {
  shouldGoDown,
  shouldGoLeft,
  shoudGoRight,
  shouldGoUp
} from './predicates'

import {
  ARROW_DOWN,
  ARROW_LEFT,
  ARROW_RIGHT,
  ARROW_UP
} from './buttons'


const parser = new InputParser()

parser.addRule(shouldGoUp(ARROW_UP, ARROW_DOWN), goUp)
parser.addRule(shouldGoDown(ARROW_UP, ARROW_DOWN), goDown)
parser.addRule(shouldGoLeft(ARROW_LEFT, ARROW_RIGHT), goLeft)
parser.addRule(shoudGoRight(ARROW_LEFT, ARROW_RIGHT), goRight)

export default parser