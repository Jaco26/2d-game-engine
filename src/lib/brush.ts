

export class Brush {
  ctx: CanvasRenderingContext2D

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
  }

  fillStyle(fillStyle: string): Brush {
    this.ctx.fillStyle = fillStyle
    return this
  }

  strokeStyle(strokeStyle: string): Brush {
    this.ctx.strokeStyle = strokeStyle
    return this
  }

  fill(fillStyle?: string): Brush {
    if (fillStyle) {
      this.ctx.fillStyle = fillStyle
    }
    this.ctx.fill()
    return this
  }

  stroke(strokeStyle?: string): Brush {
    if (strokeStyle) {
      this.ctx.strokeStyle = strokeStyle
    }
    this.ctx.stroke()
    return this
  }

  rect(x: number, y: number, w: number, h: number): Brush {
    this.ctx.beginPath()
    this.ctx.rect(x, y, w, h)
    this.ctx.closePath()
    return this
  }

  arc(x: number, y: number, r: number): Brush {
    this.ctx.beginPath()
    this.ctx.arc(x, y, r, 0, Math.PI * 2)
    this.ctx.closePath()
    return this
  }

  fillText(x: number, y: number, text: string, font: string, maxWidth: number): Brush {
    this.ctx.beginPath()
    this.ctx.font = font
    this.ctx.fillText(text, x, y, maxWidth)
    this.ctx.closePath()
    return this
  }

  drawImage(img: HTMLImageElement, dx: number, dy: number): Brush {
    this.ctx.beginPath()
    this.ctx.drawImage(img, dx, dy)
    this.ctx.closePath()
    return this
  }

  clearRect(x: number, y: number, w: number, h: number): Brush {
    this.ctx.clearRect(x, y, w, h)
    return this
  }
}
