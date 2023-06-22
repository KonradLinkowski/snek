export function distance(a, b) {
  const x = a.x - b.x
  const y = a.y - b.y
  return Math.hypot(x, y)
}

export function move(start, end, step, max = 0) {
  const dist = distance(start, end)
  const vector = sub(end, start)
  const normalized = norm(vector)
  const final = mul(normalized, step)
  const position = add(start, final)

  if (max) {
    const finalDistance = distance(position, end)
    if (finalDistance < max || dist < step) {
      const vector = sub(start, end)
      const normalized = norm(vector, true)
      const final = mul(normalized, max)
      const position = add(end, final)

      return position
    }
  }

  if (!max && dist <= step) {
    return end
  }

  return position
}

export function norm(v, safe = false) {
  const mg = mag(v)
  if (safe && mg === 0) {
    return { x: 1, y: 0 }
  }
  return mul(v, 1 / mg)
}

export function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  }
}

export function sub(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  }
}

export function mul(v, f) {
  return {
    x: v.x * f,
    y: v.y * f
  }
}

export function mag(v) {
  return Math.hypot(v.x, v.y)
}
