export function distance(a, b) {
  const x = a.x - b.x
  const y = a.y - b.y
  return Math.hypot(x, y)
}

export function move(start, end, step, max = 0) {
  const dist = distance(start, end)

  if (dist <= max) {
    return start
  }

  if (dist <= step) {
    return end
  }

  const vector = {
    x: (end.x - start.x),
    y: (end.y - start.y)
  }

  const length = Math.hypot(vector.x, vector.y)

  const normalized = {
    x: vector.x / length,
    y: vector.y / length
  }

  const mulStep = {
    x: normalized.x * step,
    y: normalized.y * step
  }

  const final = {
    x: start.x + mulStep.x,
    y: start.y + mulStep.y
  }

  return final
}
