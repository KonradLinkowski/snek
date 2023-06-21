import { createApple } from './apple'
import { createMouse } from './mouse'
import { createScore } from './score'
import { createSnake } from './snake'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

resize(canvas)

window.addEventListener('resize', () => resize(canvas))

const score = createScore()

const mouse = createMouse(canvas)
const snake = createSnake(canvas)
const apples = [...Array(5)].map(() => createApple(canvas))

let lastTime = 0

loop(0)

function loop(time) {
  const dt = time - lastTime
  lastTime = time

  snake.update(dt, mouse)

  for (let i = 0; i < apples.length; i += 1) {
    if (apples[i].canDie(snake.getHead())) {
      apples[i] = createApple(canvas)
      snake.eat()
      score.add(1)
    }
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  for (const apple of apples) {
    apple.render(ctx)
  }
  snake.render(ctx)


  requestAnimationFrame(loop)
}

function resize(canvas) {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}
