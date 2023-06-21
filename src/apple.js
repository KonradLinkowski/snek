import { distance } from './math'

export function createApple(canvas) {
  const pos = {
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height)
  }

  function render(ctx) {
    ctx.beginPath()
    ctx.arc(pos.x, pos.y, 10, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fillStyle = 'purple'
    ctx.fill()
  }

  function canDie(head) {
    const dist = distance(pos, head)

    return dist < 50
  }

  return {
    render,
    canDie
  }
}
