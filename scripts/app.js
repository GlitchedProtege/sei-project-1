
function init() {
  const grid = document.querySelector('.grid')
  const cells = []
  const scoreDisplay = document.querySelector('#score')
  const playSpace = document.querySelector('.grid')
  const winner = document.querySelector('.win-screen')
  const resetButton = document.querySelector('#reset')
  
  let score = 0
  const width = 32
  const height = 25
  const cellCount = width * (height)

  let hackPosition = 82

  function addPath() {
    const maze = cells.slice(82, 96)
    maze.forEach(cell => createClass(cell))
    const maze1 = cells.slice(98, 102)
    maze1.forEach(cell => createClass(cell))
    const maze2 = cells.slice(104, 118)
    maze2.forEach(cell => createClass(cell))
    const maze3 = cells.slice(168, 179)
    maze3.forEach(cell => createClass(cell))
    const maze4 = cells.slice(181, 192)
    maze4.forEach(cell => createClass(cell))
    const maze5 = cells.slice(202, 210)
    maze5.forEach(cell => createClass(cell))
    const maze6 = cells.slice(230, 238)
    maze6.forEach(cell => createClass(cell))
    const maze7 = cells.slice(286, 314)
    maze7.forEach(cell => createClass(cell))
    const maze8 = cells.slice(362, 367)
    maze8.forEach(cell => createClass(cell))
    const maze9 = cells.slice(393, 398)
    maze9.forEach(cell => createClass(cell))
    const maze10 = cells.slice(409, 414)
    maze10.forEach(cell => createClass(cell))
    const maze11 = cells.slice(415, 418)
    maze11.forEach(cell => createClass(cell))
    const maze12 = cells.slice(424, 429)
    maze12.forEach(cell => createClass(cell))
    const maze13 = cells.slice(430, 433)
    maze13.forEach(cell => createClass(cell))
    const maze14 = cells.slice(482, 487)
    maze14.forEach(cell => createClass(cell))
    const maze15 = cells.slice(489, 492)
    maze15.forEach(cell => createClass(cell))
    const maze16 = cells.slice(493, 496)
    maze16.forEach(cell => createClass(cell))
    const maze17 = cells.slice(498, 502)
    maze17.forEach(cell => createClass(cell))
    const maze18 = cells.slice(504, 507)
    maze18.forEach(cell => createClass(cell))
    const maze19 = cells.slice(508, 511)
    maze19.forEach(cell => createClass(cell))
    const maze20 = cells.slice(553, 558)
    maze20.forEach(cell => createClass(cell))
    const maze21 = cells.slice(567, 577)
    maze21.forEach(cell => createClass(cell))
    const maze22 = cells.slice(582, 592)
    maze22.forEach(cell => createClass(cell))
    const maze23 = cells.slice(642, 648)
    maze23.forEach(cell => createClass(cell))
    const maze24 = cells.slice(656, 663)
    maze24.forEach(cell => createClass(cell))
    const maze25 = cells.slice(671, 678)
    maze25.forEach(cell => createClass(cell))
    const maze26 = cells.slice(687, 697)
    maze26.forEach(cell => createClass(cell))
    const maze27 = cells.slice(702, 712)
    maze27.forEach(cell => createClass(cell))

    cells[122].classList.add('innerpath')
    cells[131].classList.add('innerpath')
    cells[135].classList.add('innerpath')
    cells[138].classList.add('innerpath')
    cells[141].classList.add('innerpath')
    cells[144].classList.add('innerpath')
    cells[148].classList.add('innerpath')
    cells[157].classList.add('innerpath')
    cells[162].classList.add('innerpath')
    cells[197].classList.add('innerpath')
    cells[218].classList.add('innerpath')
    cells[221].classList.add('innerpath')
    cells[242].classList.add('innerpath')
    cells[246].classList.add('innerpath')
    cells[258].classList.add('innerpath')
    cells[261].classList.add('innerpath')
    cells[273].classList.add('innerpath')
    cells[277].classList.add('innerpath')
    cells[282].classList.add('innerpath')
    cells[317].classList.add('innerpath')
    cells[322].classList.add('innerpath')
    cells[326].classList.add('innerpath')
    cells[338].classList.add('innerpath')
    cells[341].classList.add('innerpath')
    cells[353].classList.add('innerpath')
    cells[357].classList.add('innerpath')
    cells[378].classList.add('innerpath')
    cells[381].classList.add('innerpath')
    cells[402].classList.add('innerpath')
    cells[404].classList.add('innerpath')
    cells[406].classList.add('innerpath')
    cells[418].classList.add('innerpath')
    cells[421].classList.add('innerpath')
    cells[433].classList.add('innerpath')
    cells[435].classList.add('innerpath')
    cells[437].classList.add('innerpath')
    cells[442].classList.add('innerpath')
    cells[444].classList.add('innerpath')
    cells[446].classList.add('innerpath')
    cells[449].classList.add('innerpath')
    cells[453].classList.add('innerpath')
    cells[455].classList.add('innerpath')
    cells[458].classList.add('innerpath')
    cells[461].classList.add('innerpath')
    cells[464].classList.add('innerpath')
    cells[468].classList.add('innerpath')
    cells[470].classList.add('innerpath')
    cells[473].classList.add('innerpath')
    cells[475].classList.add('innerpath')
    cells[477].classList.add('innerpath')
    cells[513].classList.add('innerpath')
    cells[515].classList.add('innerpath')
    cells[517].classList.add('innerpath')
    cells[522].classList.add('innerpath')
    cells[525].classList.add('innerpath')
    cells[531].classList.add('innerpath')
    cells[535].classList.add('innerpath')
    cells[538].classList.add('innerpath')
    cells[540].classList.add('innerpath')
    cells[546].classList.add('innerpath')
    cells[550].classList.add('innerpath')
    cells[562].classList.add('innerpath')
    cells[565].classList.add('innerpath')
    cells[578].classList.add('innerpath')
    cells[580].classList.add('innerpath')
    cells[593].classList.add('innerpath')
    cells[597].classList.add('innerpath')
    cells[602].classList.add('innerpath')
    cells[605].classList.add('innerpath')
    cells[607].classList.add('innerpath')
    cells[611].classList.add('innerpath')
    cells[616].classList.add('innerpath')
    cells[618].classList.add('innerpath')
    cells[620].classList.add('innerpath')
    cells[622].classList.add('innerpath')
    cells[626].classList.add('innerpath')
    cells[631].classList.add('innerpath')
    cells[633].classList.add('innerpath')
    cells[637].classList.add('innerpath')
    cells[651].classList.add('innerpath')
    cells[666].classList.add('innerpath')
  }

  function createClass(cell) {
    cell.classList.add('innerpath')
  }

  function addTeleports() {
    cells[124].classList.add('teleporter')
    cells[220].classList.add('teleporter')
    cells[379].classList.add('teleporter')
    cells[629].classList.add('teleporter')
    cells[635].classList.add('teleporter')
    cells[649].classList.add('teleporter')
    cells[563].classList.add('teleporter')
    cells[316].classList.add('teleporter')
  }

  function winScreen() {
    playSpace.classList.add('remove-grid')
    winner.classList.add('win')
  }


  function addHack(position) {
    cells[position].classList.add('hack')
  }

  function removeHack(position) {
    cells[position].classList.remove('hack')
  }

  function changeCell(position) {
    if (cells[position].classList.contains('painted') === false || cells[position].classList.contains('teleporter')) {
      cells[position].classList.add('painted')
      score += 5
      scoreDisplay.textContent = score
    }
  }

  function createGrid(startingPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addHack(startingPosition)
    addPath()
    addTeleports()
  }

  function handleKeyDown(event) {
    removeHack(hackPosition)
    changeCell(hackPosition)

    // const x = hackPosition % 40
    // const y = Math.floor(hackPosition / 28)
    // const path = document.querySelectorAll('.innerpath')
    const right = hackPosition + 1
    const left = hackPosition - 1
    const up = hackPosition - 40
    const down = hackPosition + 40
    // console.log(right, left, up, down)

    switch (event.keyCode) {
      case 39:
        if (cells[right].classList.contains('innerpath') || cells[right].classList.contains('teleporter')) hackPosition++
        break
      case 37:
        if (cells[left].classList.contains('innerpath') || cells[left].classList.contains('teleporter')) hackPosition--
        break
      case 38:
        if (cells[up].classList.contains('innerpath') || cells[up].classList.contains('teleporter')) hackPosition = hackPosition - 40
        break
      case 40:
        if (cells[down].classList.contains('innerpath') || cells[down].classList.contains('teleporter')) hackPosition = hackPosition + 40
        break
      case 190:
        if (hackPosition === 124) hackPosition = 220
        if (hackPosition === 379) hackPosition = 629
        if (hackPosition === 649) hackPosition = 635
        if (hackPosition === 563) hackPosition = 316
        break
      case 188:
        if (hackPosition === 220) hackPosition = 124
        if (hackPosition === 629) hackPosition = 379
        if (hackPosition === 635) hackPosition = 649
        if (hackPosition === 316) hackPosition = 563
        break
      case 16:
        winScreen()
        break
      default:
        addHack(hackPosition)
    }
    if (score !== 1455) {
      addHack(hackPosition)
    } else {
      winScreen()
    }
  }

  function setBack() {
    score = 0
    scoreDisplay.textContent = score
    removeHack(hackPosition)
    hackPosition = 82
    addHack(hackPosition)
    for (let i = 0; i < cellCount; i++) {
      cells[i].classList.remove('painted')
    }
  }

  createGrid(hackPosition)

  document.addEventListener('keydown', handleKeyDown)
  resetButton.addEventListener('click', setBack)
}

















window.addEventListener('DOMContentLoaded', init)