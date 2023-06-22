import { move, sub, add } from './math'

export function createSnake(canvas, radius) {
  const speed = radius / 25
  const head = { x: canvas.width / 2, y: canvas.height / 2, head: true }
  const segments = [head]

  for (let i = 0; i < 10; i += 1) {
    segments.unshift({ x: segments[0].x - radius, y: segments[0].y })
  }

  function update(dt, mouse) {
    const mousePos = mouse.get()
    const newPos = move(head, mousePos, speed * dt)
    head.x = newPos.x
    head.y = newPos.y

    for (let i = 0; i < segments.length - 1; i += 1) {
      const newPos = move(segments[i], segments[i + 1], speed * dt, radius)
      segments[i].x = newPos.x
      segments[i].y = newPos.y
    }
  }

  function render(ctx) {
    for (const segment of segments) {
      ctx.beginPath()
      ctx.arc(segment.x, segment.y, radius, 0, Math.PI * 2)
      ctx.closePath()
      ctx.fillStyle = segment.head ? 'red' : 'green'
      ctx.fill()
      ctx.stroke()
    }
  }

  function eat() {
    const position = add(sub(segments[0], segments[1]), segments[0])
    segments.unshift(position)
  }

  function getHead() {
    return { ...head }
  }

  return {
    update,
    render,
    eat,
    getHead
  }
}
