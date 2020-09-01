
function init() {
  const grid = document.querySelector('.grid')
  const cells = []
  const scoreDisplay = document.querySelector('#score')
  const playSpace = document.querySelector('.grid')
  const winner = document.querySelector('.win-screen')
  const killer = document.querySelector('.kill-screen')
  const resetButton = document.querySelector('#reset')
  const partySwitch = document.querySelector('#party')
  let party
  
  let score = 0
  const width = 32
  const height = 25
  const cellCount = width * (height)

  let hackPosition = 82

  let joshPosition = 409
  let hankPosition = 168
  let stephPosition = 191
  let crakePosition = 591

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

  function killScreen() {
    playSpace.classList.add('remove-grid')
    killer.classList.add('kill')
  }


  function addHack(position) {
    cells[position].classList.add('hack')
  }

  function removeHack(position) {
    cells[position].classList.remove('hack')
  }

  function changeCell(position) {
    if (cells[position].classList.contains('painted') === false && cells[position].classList.contains('teleporter') === false) {
      cells[position].classList.add('painted')
      score += 5
      scoreDisplay.textContent = score
    }
  }

  function keepDroning(position) {
    if (cells[position].classList.contains('been-here') === false) {
      cells[position].classList.add('been-here')
    }
  }
  function keepDroning1(position) {
    if (cells[position].classList.contains('been-here1') === false) {
      cells[position].classList.add('been-here1')
    }
  }
  function keepDroning2(position) {
    if (cells[position].classList.contains('been-here2') === false) {
      cells[position].classList.add('been-here2')
    }
  }
  function keepDroning3(position) {
    if (cells[position].classList.contains('been-here3') === false) {
      cells[position].classList.add('been-here3')
    }
  }

  function clearThePath(position) {
    cells[position].classList.remove('been-here')
  }
  function clearThePath1(position) {
    cells[position].classList.remove('been-here1')
  }
  function clearThePath2(position) {
    cells[position].classList.remove('been-here2')
  }
  function clearThePath3(position) {
    cells[position].classList.remove('been-here3')
  }

  function addJosh(position) {
    cells[position].classList.add('josh')
  }
  function removeJosh(position) {
    cells[position].classList.remove('josh')
  }

  function addHank(position) {
    cells[position].classList.add('hank')
  }
  function removeHank(position) {
    cells[position].classList.remove('hank')
  }

  function addSteph(position) {
    cells[position].classList.add('steph')
  }
  function removeSteph(position) {
    cells[position].classList.remove('steph')
  }

  function addCrake(position) {
    cells[position].classList.add('crake')
  }
  function removeCrake(position) {
    cells[position].classList.remove('crake')
  }

  function createGrid(startingPosition, josh, hank, steph, crake) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addHack(startingPosition)
    addJosh(josh)
    addHank(hank)
    addSteph(steph)
    addCrake(crake)
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
      case 75:
        killScreen()
        break
      default:
        addHack(hackPosition)
    }
    moveEnd()
  }

  function setBack() {
    score = 0
    scoreDisplay.textContent = score
    removeHack(hackPosition)
    hackPosition = 82
    addHack(hackPosition)
    removeJosh(joshPosition)
    removeHank(hankPosition)
    removeSteph(stephPosition)
    removeCrake(crakePosition)
    joshPosition = 409
    hankPosition = 168
    stephPosition = 191
    crakePosition = 591
    addJosh(joshPosition)
    addHank(hankPosition)
    addSteph(stephPosition)
    addCrake(crakePosition)
    for (let i = 0; i < cellCount; i++) {
      cells[i].classList.remove('painted', 'been-here', 'been-here1', 'been-here2', 'been-here3')
    }
    playSpace.classList.remove('remove-grid')
    winner.classList.remove('win')
    killer.classList.remove('kill')
    stopTheStartedParty()
  }

  function move() {
    const rightJosh = joshPosition + 1
    const leftJosh = joshPosition - 1
    const upJosh = joshPosition - 40
    const downJosh = joshPosition + 40
    const rightHank = hankPosition + 1
    const leftHank = hankPosition - 1
    const upHank = hankPosition - 40
    const downHank = hankPosition + 40
    const rightSteph = stephPosition + 1
    const leftSteph = stephPosition - 1
    const upSteph = stephPosition - 40
    const downSteph = stephPosition + 40
    const rightCrake = crakePosition + 1
    const leftCrake = crakePosition - 1
    const upCrake = crakePosition - 40
    const downCrake = crakePosition + 40
    removeJosh(joshPosition)
    cells[joshPosition].classList.remove('left', 'right', 'up')
    cells[hankPosition].classList.remove('left', 'right', 'up')
    cells[stephPosition].classList.remove('left', 'right', 'up')
    cells[crakePosition].classList.remove('left', 'right', 'up')
    keepDroning(joshPosition)
    removeHank(hankPosition)
    keepDroning1(hankPosition)
    removeSteph(stephPosition)
    keepDroning2(stephPosition)
    removeCrake(crakePosition)
    keepDroning3(crakePosition)
    function sweetMoves() {
      const random = Math.floor(Math.random() * 20) + 1
      if (cells[rightJosh].classList.contains('innerpath') && (random > 0 && random > 6) && (cells[rightJosh].classList.contains('been-here') === false)) { 
        clearThePath(leftJosh)
        clearThePath(upJosh)
        clearThePath(downJosh)
        joshPosition += 1
        cells[joshPosition].classList.add('right')
      } else if (cells[leftJosh].classList.contains('innerpath') && (random > 5 && random < 11) && (cells[leftJosh].classList.contains('been-here') === false)) {
        clearThePath(rightJosh)
        clearThePath(upJosh)
        clearThePath(downJosh)
        joshPosition -= 1
        cells[joshPosition].classList.add('left')
      }  else if (cells[upJosh].classList.contains('innerpath') && (random > 10 && random < 16) && (cells[upJosh].classList.contains('been-here') === false)) {
        clearThePath(downJosh)
        clearThePath(rightJosh)
        clearThePath(leftJosh)
        joshPosition = joshPosition - 40
        cells[joshPosition].classList.add('up')
      } else if (cells[downJosh].classList.contains('innerpath') && (random > 15 && random < 21) && (cells[downJosh].classList.contains('been-here') === false)) {
        clearThePath(upJosh)
        clearThePath(rightJosh)
        clearThePath(leftJosh)
        joshPosition = joshPosition + 40
      } else if (cells[rightJosh].classList.contains('innerpath') && (cells[rightJosh].classList.contains('been-here') === false)) { 
        clearThePath(leftJosh)
        clearThePath(upJosh)
        clearThePath(downJosh)
        joshPosition += 1
        cells[joshPosition].classList.add('right')
      } else if (cells[leftJosh].classList.contains('innerpath') && (cells[leftJosh].classList.contains('been-here') === false)) {
        clearThePath(rightJosh)
        clearThePath(upJosh)
        clearThePath(downJosh)
        joshPosition -= 1
        cells[joshPosition].classList.add('left')
      }  else if (cells[upJosh].classList.contains('innerpath') && (cells[upJosh].classList.contains('been-here') === false)) {
        clearThePath(downJosh)
        clearThePath(rightJosh)
        clearThePath(leftJosh)
        joshPosition = joshPosition - 40
        cells[joshPosition].classList.add('up')
      } else if (cells[downJosh].classList.contains('innerpath') && (cells[downJosh].classList.contains('been-here') === false)){
        clearThePath(upJosh)
        clearThePath(rightJosh)
        clearThePath(leftJosh)
        joshPosition = joshPosition + 40
      }
    }
    function sweetMoves1() {
      const random = Math.floor(Math.random() * 20) + 1
      if (cells[rightHank].classList.contains('innerpath') && (random > 0 && random > 6) && (cells[rightHank].classList.contains('been-here1') === false)) { 
        clearThePath1(leftHank)
        clearThePath1(upHank)
        clearThePath1(downHank)
        hankPosition += 1
        cells[hankPosition].classList.add('right')
      } else if (cells[downHank].classList.contains('innerpath') && (random > 15 && random < 21) && (cells[downHank].classList.contains('been-here1') === false)) {
        clearThePath1(upHank)
        clearThePath1(leftHank)
        clearThePath1(rightHank)
        hankPosition = hankPosition + 40
      } else if (cells[upHank].classList.contains('innerpath') && (random > 10 && random < 16) && (cells[upHank].classList.contains('been-here1') === false)) {
        clearThePath1(downHank)
        clearThePath1(leftHank)
        clearThePath1(rightHank)
        hankPosition = hankPosition - 40
        cells[hankPosition].classList.add('up')
      } else if (cells[leftHank].classList.contains('innerpath') && (random > 5 && random < 11) && (cells[leftHank].classList.contains('been-here1') === false)) {
        clearThePath1(rightHank)
        clearThePath1(upHank)
        clearThePath1(downHank)
        hankPosition -= 1
        cells[hankPosition].classList.add('left')
      } else if (cells[rightHank].classList.contains('innerpath') && (cells[rightHank].classList.contains('been-here1') === false)) { 
        clearThePath1(leftHank)
        clearThePath1(upHank)
        clearThePath1(downHank)
        hankPosition += 1
        cells[hankPosition].classList.add('right')
      } else if (cells[downHank].classList.contains('innerpath') && (cells[downHank].classList.contains('been-here1') === false)) {
        clearThePath1(upHank)
        clearThePath1(leftHank)
        clearThePath1(rightHank)
        hankPosition = hankPosition + 40
      }  else if (cells[upHank].classList.contains('innerpath') && (cells[upHank].classList.contains('been-here1') === false)) {
        clearThePath1(downHank)
        clearThePath1(leftHank)
        clearThePath1(rightHank)
        hankPosition = hankPosition - 40
        cells[hankPosition].classList.add('up')
      } else if (cells[leftHank].classList.contains('innerpath') && (cells[leftHank].classList.contains('been-here1') === false)) {
        clearThePath1(rightHank)
        clearThePath1(upHank)
        clearThePath1(downHank)
        hankPosition -= 1
        cells[hankPosition].classList.add('left')
      }
    }
    function sweetMoves2() {
      const random = Math.floor(Math.random() * 20) + 1
      if (cells[leftSteph].classList.contains('innerpath') && (random > 5 && random < 11) && (cells[leftSteph].classList.contains('been-here2') === false)) {
        clearThePath2(rightSteph)
        clearThePath2(upSteph)
        clearThePath2(downSteph)
        stephPosition -= 1
        cells[stephPosition].classList.add('left')
      } else if (cells[downSteph].classList.contains('innerpath') && (random > 15 && random < 21) && (cells[downSteph].classList.contains('been-here2') === false)) {
        clearThePath2(upSteph)
        clearThePath2(leftSteph)
        clearThePath2(rightSteph)
        stephPosition = stephPosition + 40
      } else if (cells[rightSteph].classList.contains('innerpath') && (random > 0 && random > 6) && (cells[rightSteph].classList.contains('been-here2') === false)) { 
        clearThePath2(leftSteph)
        clearThePath2(upSteph)
        clearThePath2(downSteph)
        stephPosition += 1
        cells[stephPosition].classList.add('right')
      } else if (cells[upSteph].classList.contains('innerpath') && (random > 10 && random < 16) && (cells[upSteph].classList.contains('been-here2') === false)) {
        clearThePath2(downSteph)
        clearThePath2(leftSteph)
        clearThePath2(rightSteph)
        stephPosition = stephPosition - 40
        cells[stephPosition].classList.add('up')
      } else if (cells[leftSteph].classList.contains('innerpath') && (cells[leftSteph].classList.contains('been-here2') === false)) {
        clearThePath2(rightSteph)
        clearThePath2(upSteph)
        clearThePath2(downSteph)
        stephPosition -= 1
        cells[stephPosition].classList.add('left')
      } else if (cells[downSteph].classList.contains('innerpath') && (cells[downSteph].classList.contains('been-here2') === false)) {
        clearThePath2(upSteph)
        clearThePath2(leftSteph)
        clearThePath2(rightSteph)
        stephPosition = stephPosition + 40
      } else if (cells[rightSteph].classList.contains('innerpath') && (cells[rightSteph].classList.contains('been-here2') === false)) { 
        clearThePath2(leftSteph)
        clearThePath2(upSteph)
        clearThePath2(downSteph)
        stephPosition += 1
        cells[stephPosition].classList.add('right')
      } else if (cells[upSteph].classList.contains('innerpath') && (cells[upSteph].classList.contains('been-here2') === false)) {
        clearThePath2(downSteph)
        clearThePath2(leftSteph)
        clearThePath2(rightSteph)
        stephPosition = stephPosition - 40
        cells[stephPosition].classList.add('up')
      }
    }
    function sweetMoves3() {
      const random = Math.floor(Math.random() * 20) + 1
      if (cells[leftCrake].classList.contains('innerpath') && (random > 0 && random > 6) && (cells[leftCrake].classList.contains('been-here3') === false)) {
        clearThePath3(rightCrake)
        clearThePath3(upCrake)
        clearThePath3(downCrake)
        crakePosition -= 1
        cells[crakePosition].classList.add('left')
      } else if (cells[upCrake].classList.contains('innerpath') && (random > 5 && random < 11) && (cells[upCrake].classList.contains('been-here3') === false)) {
        clearThePath3(downCrake)
        clearThePath3(leftCrake)
        clearThePath3(rightCrake)
        crakePosition = crakePosition - 40
        cells[crakePosition].classList.add('up')
      } else if (cells[rightCrake].classList.contains('innerpath') && (random > 10 && random < 16) && (cells[rightCrake].classList.contains('been-here3') === false)) { 
        clearThePath3(leftCrake)
        clearThePath3(upCrake)
        clearThePath3(downCrake)
        crakePosition += 1
        cells[crakePosition].classList.add('right')
      } else if (cells[downCrake].classList.contains('innerpath') && (random > 15 && random < 21) && (cells[downCrake].classList.contains('been-here3') === false)) {
        clearThePath3(upCrake)
        clearThePath3(leftCrake)
        clearThePath3(rightCrake)
        crakePosition = crakePosition + 40
      } else if (cells[leftCrake].classList.contains('innerpath') && (cells[leftCrake].classList.contains('been-here3') === false)) {
        clearThePath3(rightCrake)
        clearThePath3(upCrake)
        clearThePath3(downCrake)
        crakePosition -= 1
        cells[crakePosition].classList.add('left')
      } else if (cells[upCrake].classList.contains('innerpath') && (cells[upCrake].classList.contains('been-here3') === false)) {
        clearThePath3(downCrake)
        clearThePath3(leftCrake)
        clearThePath3(rightCrake)
        crakePosition = crakePosition - 40
        cells[crakePosition].classList.add('up')
      } else if (cells[rightCrake].classList.contains('innerpath') && (cells[rightCrake].classList.contains('been-here3') === false)) { 
        clearThePath3(leftCrake)
        clearThePath3(upCrake)
        clearThePath3(downCrake)
        crakePosition += 1
        cells[crakePosition].classList.add('right')
      } else if (cells[downCrake].classList.contains('innerpath') && (cells[downCrake].classList.contains('been-here3') === false)) {
        clearThePath3(upCrake)
        clearThePath3(leftCrake)
        clearThePath3(rightCrake)
        crakePosition = crakePosition + 40
      }
    }
    sweetMoves()
    sweetMoves1()
    sweetMoves2()
    sweetMoves3()
    addJosh(joshPosition)
    addHank(hankPosition)
    addSteph(stephPosition)
    addCrake(crakePosition)
    if (hackPosition === joshPosition || hackPosition === hankPosition || hackPosition === stephPosition || hackPosition === crakePosition) {
      killScreen()
    }
  }

  function sightLines(leftEdge, rightEdge, identification) {
    if (hackPosition > leftEdge && hackPosition < identification) {
      console.log('seen you: left')
    } else if (hackPosition < rightEdge && hackPosition > identification) {
      console.log('seen you: right')
    }
    if (hackPosition === identification - 40 || hackPosition === identification - 80 || hackPosition === identification - 120 || hackPosition === identification - 120 || hackPosition === identification - 200 || hackPosition === identification - 240 || hackPosition === identification - 280 || hackPosition === identification - 320 || hackPosition === identification - 360 || hackPosition === identification - 400 || hackPosition === identification - 440 || hackPosition === identification - 480 || hackPosition === identification - 520 || hackPosition === identification - 560 || hackPosition === identification - 600) {
      console.log('seen you: up')
    }
    if (hackPosition === identification + 40 || hackPosition === identification + 80 || hackPosition === identification + 120 || hackPosition === identification + 120 || hackPosition === identification + 200 || hackPosition === identification + 240 || hackPosition === identification + 280 || hackPosition === identification + 320 || hackPosition === identification + 360 || hackPosition === identification + 400 || hackPosition === identification + 440 || hackPosition === identification + 480 || hackPosition === identification + 520 || hackPosition === identification + 560 || hackPosition === identification + 600) {
      console.log('seen you: down')
    }
  }

  function smartMove(id) {
    if (id > 81 && id < 118) {
      sightLines(81, 118, id)
    } else if (id > 121 && id < 158) {
      sightLines(121, 158, id)
    } else if (id > 161 && id < 198) {
      sightLines(161, 198, id)
    } else if (id > 201 && id < 238) {
      sightLines(201, 238, id)
    } else if (id > 241 && id < 278) {
      sightLines(241, 278, id)
    } else if (id > 281 && id < 318) {
      sightLines(281, 318, id)
    } else if (id > 321 && id < 358) {
      sightLines(321, 358, id)
    } else if (id > 361 && id < 398) {
      sightLines(361, 398, id)
    } else if (id > 401 && id < 438) {
      sightLines(401, 438, id)
    } else if (id > 441 && id < 478) {
      sightLines(441, 478, id)
    } else if (id > 481 && id < 518) {
      sightLines(481, 518, id)
    } else if (id > 521 && id < 558) {
      sightLines(521, 558, id)
    } else if (id > 561 && id < 598) {
      sightLines(561, 598, id)
    } else if (id > 601 && id < 638) {
      sightLines(601, 638, id)
    } else if (id > 641 && id < 678) {
      sightLines(641, 678, id)
    } else if (id > 681 && id < 718) {
      sightLines(681, 718, id)
    }  
  }
  function moveEnd() {
    smartMove(joshPosition)
    smartMove(hankPosition)
    smartMove(stephPosition)
    smartMove(crakePosition)
    if (score !== 1455) {
      addHack(hackPosition)
    } else {
      winScreen()
    }
  }

  function getThePartyStarted() {
    party = setInterval(move, 300)
  }
  function stopTheStartedParty() {
    clearInterval(party)
  }

  createGrid(hackPosition, joshPosition, hankPosition, stephPosition, crakePosition)

  document.addEventListener('keydown', handleKeyDown)
  resetButton.addEventListener('click', setBack)
  partySwitch.addEventListener('click', getThePartyStarted)
}

















window.addEventListener('DOMContentLoaded', init)