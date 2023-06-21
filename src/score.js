export function createScore() {
  const $score = document.querySelector('.score')
  let score = 0

  function add(value) {
    score += value

    $score.textContent = score
  }

  return {
    add
  }
}