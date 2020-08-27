
function init() {
  const grid = document.querySelector('.grid')
  const cells = []

  const width = 32
  const cellCount = width * (width - 7)

  let hackPosition = 0

  function addHack(position) {
    cells[position].classList.add('hack')
  }

  function removeHack(position) {
    cells[position].classList.remove('hack')
  }

  function createGrid(startingPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addHack(startingPosition)
  }

  function handleKeyDown(event) {
    removeHack(hackPosition)

    const x = hackPosition % 40
    const y = Math.floor(hackPosition / 40)

    switch (event.keyCode) {
      case 39:
        if (x < 40 - 1) hackPosition++
        break
      case 37:
        if (x > 0) hackPosition--
        break
      case 38:
        if (y > 0) hackPosition = hackPosition - 40
        break
      case 40:
        if (hackPosition >= 760 && hackPosition <= 799) return
        if (y < 40 - 1) hackPosition = hackPosition + 40
        break
      default:
        return
    }
    addHack(hackPosition)
  }

  createGrid(hackPosition)

  document.addEventListener('keydown', handleKeyDown)
}

















window.addEventListener('DOMContentLoaded', init)