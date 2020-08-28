
function init() {
  const grid = document.querySelector('.grid')
  const cells = []

  const width = 32
  const height = 25
  const cellCount = width * (height)

  let hackPosition = 82


  function addWall() {
    cells[2].classList.add('outerwall')
  }

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
    addWall()
  }

  function handleKeyDown(event) {
    removeHack(hackPosition)

    const x = hackPosition % 40
    const y = Math.floor(hackPosition / 28)

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
        // if (hackPosition >= 760 && hackPosition <= 799) return
        if (y < 28 - 1) hackPosition = hackPosition + 40
        break
      case 190:
        if (hackPosition === 124) hackPosition = 219
        if (hackPosition === 378) hackPosition = 628
        if (hackPosition === 649) hackPosition = 634
        if (hackPosition === 563) hackPosition = 315
        break
      case 188:
        if (hackPosition === 219) hackPosition = 124
        if (hackPosition === 628) hackPosition = 378
        if (hackPosition === 634) hackPosition = 649
        if (hackPosition === 315) hackPosition = 563
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