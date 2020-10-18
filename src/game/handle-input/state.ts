import { FiniteStateMachine } from '../../lib/state'

import * as pdct from './predicates'
import * as btn from './buttons'

const isRightPressed = pdct.shoudGoRight(btn.ARROW_LEFT, btn.ARROW_RIGHT)
const isLeftPressed = pdct.shouldGoLeft(btn.ARROW_LEFT, btn.ARROW_RIGHT)
const isDownPressed = pdct.shouldGoDown(btn.ARROW_UP, btn.ARROW_DOWN)
const isUpPressed = pdct.shouldGoUp(btn.ARROW_UP, btn.ARROW_DOWN)


export const yAxisState = new FiniteStateMachine('STATIONARY', {
  STATIONARY: {
    handleInput(source, spriteId, input, setState) {
      if (source === 'keyboard') {
        if (isDownPressed(input)) setState('MOVING_DOWN')
        else if (isUpPressed(input)) setState('MOVING_UP')
      }
    },
    update(sprite) {

    }
  },
  MOVING_UP: {
    handleInput(source, spriteId, input, setState) {
      if (source === 'keyboard') {
        if (isUpPressed(input)) return
        if (isDownPressed(input)) setState('MOVING_DOWN')
        else setState('STATIONARY')
      }
    },
    update(sprite) {
      sprite.dimensions.y -= 2
    }
  },
  MOVING_DOWN: {
    handleInput(source, spriteId, input, setState) {
      if (source === 'keyboard') {
        if (isDownPressed(input)) return
        if (isUpPressed(input)) setState('MOVING_UP')
        else setState('STATIONARY')
      }
    },
    update(sprite) {
      sprite.dimensions.y += 2
    }
  }
})

export const xAxisState = new FiniteStateMachine('STATIONARY', {
  STATIONARY: {
    handleInput(source, spriteId, input, setState) {
      if (source === 'keyboard') {
        if (isRightPressed(input)) setState('MOVING_RIGHT')
        else if (isLeftPressed(input)) setState('MOVING_LEFT')
      }
    },
    update(sprite) {

    }
  },
  MOVING_LEFT: {
    handleInput(source, spriteId, input, setState) {
      if (source === 'keyboard') {
        if (isLeftPressed(input)) return
        if (isRightPressed(input)) setState('MOVING_RIGHT')
        else setState('STATIONARY')
      }
    },
    update(sprite) {
      sprite.dimensions.x -= 2
    }
  },
  MOVING_RIGHT: {
    handleInput(source, spriteId, input, setState) {
      if (source === 'keyboard') {
        if (isRightPressed(input)) return
        if (isLeftPressed(input)) setState('MOVING_LEFT')
        else setState('STATIONARY')
      }
    },
    update(sprite) {
      sprite.dimensions.x += 2
    }
  }
})

export const makeCollisionState = () => (
  new FiniteStateMachine('NOT', {
    NOT: {
      handleInput(source, spriteId, input, setState) {
        if (source === 'messages' && pdct.spriteDidCollide(spriteId)(input)) {
          setState('COLLIDED')
        }
      },
      update(sprite) {
        sprite.fillStyle = 'green'
      }
    },
    COLLIDED: {
      handleInput(source, spriteId, input, setState) {
        if (source === 'messages' && !pdct.spriteDidCollide(spriteId)(input)) {
          setState('NOT')
        }
      },
      update(sprite) {
        sprite.fillStyle = 'red'
      }
    }
  })
)