export function createMouse(canvas) {
  const mouse = { x: canvas.width / 2, y: canvas.height / 2 }
  const rect = canvas.getBoundingClientRect()
  window.addEventListener('mousemove', (evt) => {
    mouse.x = evt.clientX - rect.left
    mouse.y = evt.clientY - rect.top
  })

  window.addEventListener('touchstart', handleTouch)
  window.addEventListener('touchmove', handleTouch)

  function handleTouch(evt) {
    const touch = evt.touches[0]
    mouse.x = touch.clientX - rect.left
    mouse.y = touch.clientY - rect.top
  }

  return {
    get() {
      return { ...mouse }
    }
  }
}
