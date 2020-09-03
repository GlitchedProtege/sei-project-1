
function init() {
  const grid = document.querySelector('.grid')
  const cells = []
  const scoreDisplay = document.querySelector('#score')
  const finalScore = document.querySelector('.kill-score')
  const playSpace = document.querySelector('.grid')
  const winner = document.querySelector('.win-screen')
  const killer = document.querySelector('.kill-screen')
  const secondKiller = document.querySelector('.second-kill-screen')
  const resetButton = document.querySelector('#reset')
  const partySwitch = document.querySelector('#party')
  const pauseButton = document.querySelector('#pause')
  const playButton = document.querySelector('#play')
  let party
  
  const audio = document.querySelector('#background')
  let scoreActual = 0
  let scoreBonus = 0
  const score = 0
  const width = 32
  const height = 25
  const cellCount = width * (height)

  let hackPosition = 82

  let joshPosition = 409
  let hankPosition = 168
  let stephPosition = 191
  let crakePosition = 591


  let gameTimer = null
  let timeCounted = 0
  let bonusPosition

  let buffTimer = null
  let buffTime = 0

  // let gunTimer = null
  // let gunTime = 0

  function powerupBuff() {
    cells[666].classList.add('power')
    cells[651].classList.add('power')
    cells[135].classList.add('power')
    cells[273].classList.add('power')
  }
  function powerDownBuff() {
    cells[666].classList.remove('power')
    cells[651].classList.remove('power')
    cells[135].classList.remove('power')
    cells[273].classList.remove('power')
  }

  function powerDownBuffSpecific(position) {
    cells[position].classList.remove('power')
  }

  // function powerupGun() {
  //   cells[135].classList.add('gun')
  //   cells[144].classList.add('gun')
  //   cells[246].classList.add('gun')
  //   cells[273].classList.add('gun')
  // }
  // function powerDownGun() {
  //   cells[135].classList.remove('gun')
  //   cells[144].classList.remove('gun')
  //   cells[246].classList.remove('gun')
  //   cells[273].classList.remove('gun')
  // }

  // function powerDownGunSpecific(position) {
  //   cells[position].classList.remove('gun')
  // }

  function backgroundMusic() {
    audio.play()
    audio.loop = true
  }

  function pauseMusic() {
    audio.pause()
  }

  function endMusic() {
    audio.currentTime = 0
    audio.pause()
  }

  function timer(position) {
    if (timeCounted === 20) {
      cells[position].classList.add('survivor')
    }
    if (timeCounted === 30) {
      cells[position].classList.remove('survivor')
      cells[position].classList.remove('saved')
      bonusPosition = 0
    }
    if (timeCounted > 30) {
      endTimer()
      timeCounted = 0
      return
      // gameTimer = setInterval(() => {
      // }, 1000)
    } else {
      timeCounted++
      console.log(timeCounted)
    }
  }

  function endTimer() {
    clearInterval(gameTimer)
    splitTimer()
  }

  function trueEndTimer() {
    clearInterval(gameTimer)
    gameTimer = null
    timeCounted = 0
  }

  function splitTimer() {
    gameTimer = null
    addBonus()
  }

  function addBonus() {
    const random = Math.floor(Math.random() * 10) + 1
    console.log(random)
    gameTimer = setInterval(() => {
      if (random === 1) {
        bonusPosition = 424
        timer(bonusPosition)
      } else if (random === 2) {
        bonusPosition = 576
        timer(bonusPosition)
      } else if (random === 3) {
        bonusPosition = 100
        timer(bonusPosition)
      } else if (random === 4) {
        bonusPosition = 299
        timer(bonusPosition)
      } else if (random === 5) {
        bonusPosition = 500
        timer(bonusPosition)
      } else if (random === 6) {
        bonusPosition = 659
        timer(bonusPosition)
      } else if (random === 7) {
        bonusPosition = 246
        timer(bonusPosition)
      } else if (random === 8) {
        bonusPosition = 273
        timer(bonusPosition)
      } else if (random === 9) {
        bonusPosition = 364
        timer(bonusPosition)
      } else {
        bonusPosition = 395
        timer(bonusPosition)
      }
    }, 1000)
  }

  function getBonus() {
    if (hackPosition === bonusPosition) {
      cells[bonusPosition].classList.remove('survivor')
      cells[bonusPosition].classList.add('saved')
      scoreBonus += 200
      scoreDisplay.textContent = scoreBonus + scoreActual
    }
  }

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
    trueEndTimer()
    clearInterval(party)
    document.removeEventListener('keydown', handleKeyDown)
  }

  function killScreen() {
    playSpace.classList.add('remove-grid')
    killer.classList.add('kill')
    finalScore.textContent = scoreBonus + scoreActual
    scoreActual = 0
    scoreBonus = 0
    scoreDisplay.textContent = scoreBonus + scoreActual
    trueEndTimer()
    clearInterval(party)
    document.removeEventListener('keydown', handleKeyDown)
  }

  function killScreenTwo() {
    playSpace.classList.add('remove-grid')
    secondKiller.classList.add('kill')
    finalScore.textContent = scoreBonus + scoreActual
    scoreActual = 0
    scoreBonus = 0
    scoreDisplay.textContent = scoreBonus + scoreActual
    trueEndTimer()
    clearInterval(party)
    document.removeEventListener('keydown', handleKeyDown)

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
      scoreActual += 5
      scoreDisplay.textContent = scoreBonus + scoreActual
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



  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addPath()
    addTeleports()
  }


  function handleKeyDown(event) {
    removeHack(hackPosition)
    changeCell(hackPosition)
    cells[hackPosition].classList.remove('left', 'up', 'down')
    const right = (hackPosition + 1)
    const left = (hackPosition - 1)
    const up = (hackPosition - 40)
    const down = (hackPosition + 40)

    switch (event.keyCode) {
      case 39:
        if (cells[right].classList.contains('innerpath') || cells[right].classList.contains('teleporter')) hackPosition++
        break
      case 37:
        if (cells[left].classList.contains('innerpath') || cells[left].classList.contains('teleporter')) hackPosition--
        cells[hackPosition].classList.add('left')
        break
      case 38:
        if (cells[up].classList.contains('innerpath') || cells[up].classList.contains('teleporter')) hackPosition = hackPosition - 40
        cells[hackPosition].classList.add('up')
        break
      case 40:
        if (cells[down].classList.contains('innerpath') || cells[down].classList.contains('teleporter')) hackPosition = hackPosition + 40 
        cells[hackPosition].classList.add('down')
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
      default:
        break
    }
    moveEnd()
  }

  function setBack() {
    scoreActual = 0
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
    secondKiller.classList.remove('kill')
    stopTheStartedParty()
    trueEndTimer()
    cells[bonusPosition].classList.remove('survivor')
    cells[bonusPosition].classList.remove('saved')
    bonusPosition = 0
    endMusic()
    powerDownBuff()
    // powerDownGun()
  }


  let sight
  let sight1
  let sight2
  let sight3

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
  function smartMove1(id) {
    if (id > 81 && id < 118) {
      sightLines1(81, 118, id)
    } else if (id > 121 && id < 158) {
      sightLines1(121, 158, id)
    } else if (id > 161 && id < 198) {
      sightLines1(161, 198, id)
    } else if (id > 201 && id < 238) {
      sightLines1(201, 238, id)
    } else if (id > 241 && id < 278) {
      sightLines1(241, 278, id)
    } else if (id > 281 && id < 318) {
      sightLines1(281, 318, id)
    } else if (id > 321 && id < 358) {
      sightLines1(321, 358, id)
    } else if (id > 361 && id < 398) {
      sightLines1(361, 398, id)
    } else if (id > 401 && id < 438) {
      sightLines1(401, 438, id)
    } else if (id > 441 && id < 478) {
      sightLines1(441, 478, id)
    } else if (id > 481 && id < 518) {
      sightLines1(481, 518, id)
    } else if (id > 521 && id < 558) {
      sightLines1(521, 558, id)
    } else if (id > 561 && id < 598) {
      sightLines1(561, 598, id)
    } else if (id > 601 && id < 638) {
      sightLines1(601, 638, id)
    } else if (id > 641 && id < 678) {
      sightLines1(641, 678, id)
    } else if (id > 681 && id < 718) {
      sightLines1(681, 718, id)
    }  
  }
  function smartMove2(id) {
    if (id > 81 && id < 118) {
      sightLines2(81, 118, id)
    } else if (id > 121 && id < 158) {
      sightLines2(121, 158, id)
    } else if (id > 161 && id < 198) {
      sightLines2(161, 198, id)
    } else if (id > 201 && id < 238) {
      sightLines2(201, 238, id)
    } else if (id > 241 && id < 278) {
      sightLines2(241, 278, id)
    } else if (id > 281 && id < 318) {
      sightLines2(281, 318, id)
    } else if (id > 321 && id < 358) {
      sightLines2(321, 358, id)
    } else if (id > 361 && id < 398) {
      sightLines2(361, 398, id)
    } else if (id > 401 && id < 438) {
      sightLines2(401, 438, id)
    } else if (id > 441 && id < 478) {
      sightLines2(441, 478, id)
    } else if (id > 481 && id < 518) {
      sightLines2(481, 518, id)
    } else if (id > 521 && id < 558) {
      sightLines2(521, 558, id)
    } else if (id > 561 && id < 598) {
      sightLines2(561, 598, id)
    } else if (id > 601 && id < 638) {
      sightLines2(601, 638, id)
    } else if (id > 641 && id < 678) {
      sightLines2(641, 678, id)
    } else if (id > 681 && id < 718) {
      sightLines2(681, 718, id)
    }  
  }
  function smartMove3(id) {
    if (id > 81 && id < 118) {
      sightLines3(81, 118, id)
    } else if (id > 121 && id < 158) {
      sightLines3(121, 158, id)
    } else if (id > 161 && id < 198) {
      sightLines3(161, 198, id)
    } else if (id > 201 && id < 238) {
      sightLines3(201, 238, id)
    } else if (id > 241 && id < 278) {
      sightLines3(241, 278, id)
    } else if (id > 281 && id < 318) {
      sightLines3(281, 318, id)
    } else if (id > 321 && id < 358) {
      sightLines3(321, 358, id)
    } else if (id > 361 && id < 398) {
      sightLines3(361, 398, id)
    } else if (id > 401 && id < 438) {
      sightLines3(401, 438, id)
    } else if (id > 441 && id < 478) {
      sightLines3(441, 478, id)
    } else if (id > 481 && id < 518) {
      sightLines3(481, 518, id)
    } else if (id > 521 && id < 558) {
      sightLines3(521, 558, id)
    } else if (id > 561 && id < 598) {
      sightLines3(561, 598, id)
    } else if (id > 601 && id < 638) {
      sightLines3(601, 638, id)
    } else if (id > 641 && id < 678) {
      sightLines3(641, 678, id)
    } else if (id > 681 && id < 718) {
      sightLines3(681, 718, id)
    }  
  }

  function sightLines(leftEdge, rightEdge, identification) {
    if (hackPosition > leftEdge && hackPosition < identification) {
      sight = 'left'
    } else if (hackPosition < rightEdge && hackPosition > identification) {
      sight = 'right'
    }
    if (hackPosition === identification - 40 || hackPosition === identification - 80 || hackPosition === identification - 120 || hackPosition === identification - 120 || hackPosition === identification - 200 || hackPosition === identification - 240 || hackPosition === identification - 280 || hackPosition === identification - 320 || hackPosition === identification - 360 || hackPosition === identification - 400 || hackPosition === identification - 440 || hackPosition === identification - 480 || hackPosition === identification - 520 || hackPosition === identification - 560 || hackPosition === identification - 600) {
      sight = 'up'
    }
    if (hackPosition === identification + 40 || hackPosition === identification + 80 || hackPosition === identification + 120 || hackPosition === identification + 120 || hackPosition === identification + 200 || hackPosition === identification + 240 || hackPosition === identification + 280 || hackPosition === identification + 320 || hackPosition === identification + 360 || hackPosition === identification + 400 || hackPosition === identification + 440 || hackPosition === identification + 480 || hackPosition === identification + 520 || hackPosition === identification + 560 || hackPosition === identification + 600) {
      sight = 'down'
    }
  }
  function sightLines1(leftEdge, rightEdge, identification) {
    if (hackPosition > leftEdge && hackPosition < identification) {
      sight1 = 'left'
    } else if (hackPosition < rightEdge && hackPosition > identification) {
      sight1 = 'right'
    }
    if (hackPosition === identification - 40 || hackPosition === identification - 80 || hackPosition === identification - 120 || hackPosition === identification - 120 || hackPosition === identification - 200 || hackPosition === identification - 240 || hackPosition === identification - 280 || hackPosition === identification - 320 || hackPosition === identification - 360 || hackPosition === identification - 400 || hackPosition === identification - 440 || hackPosition === identification - 480 || hackPosition === identification - 520 || hackPosition === identification - 560 || hackPosition === identification - 600) {
      sight1 = 'up'
    }
    if (hackPosition === identification + 40 || hackPosition === identification + 80 || hackPosition === identification + 120 || hackPosition === identification + 120 || hackPosition === identification + 200 || hackPosition === identification + 240 || hackPosition === identification + 280 || hackPosition === identification + 320 || hackPosition === identification + 360 || hackPosition === identification + 400 || hackPosition === identification + 440 || hackPosition === identification + 480 || hackPosition === identification + 520 || hackPosition === identification + 560 || hackPosition === identification + 600) {
      sight1 = 'down'
    }
  }
  function sightLines2(leftEdge, rightEdge, identification) {
    if (hackPosition > leftEdge && hackPosition < identification) {
      sight2 = 'left'
    } else if (hackPosition < rightEdge && hackPosition > identification) {
      sight2 = 'right'
    }
    if (hackPosition === identification - 40 || hackPosition === identification - 80 || hackPosition === identification - 120 || hackPosition === identification - 120 || hackPosition === identification - 200 || hackPosition === identification - 240 || hackPosition === identification - 280 || hackPosition === identification - 320 || hackPosition === identification - 360 || hackPosition === identification - 400 || hackPosition === identification - 440 || hackPosition === identification - 480 || hackPosition === identification - 520 || hackPosition === identification - 560 || hackPosition === identification - 600) {
      sight2 = 'up'
    }
    if (hackPosition === identification + 40 || hackPosition === identification + 80 || hackPosition === identification + 120 || hackPosition === identification + 120 || hackPosition === identification + 200 || hackPosition === identification + 240 || hackPosition === identification + 280 || hackPosition === identification + 320 || hackPosition === identification + 360 || hackPosition === identification + 400 || hackPosition === identification + 440 || hackPosition === identification + 480 || hackPosition === identification + 520 || hackPosition === identification + 560 || hackPosition === identification + 600) {
      sight2 = 'down'
    }
  }
  function sightLines3(leftEdge, rightEdge, identification) {
    if (hackPosition > leftEdge && hackPosition < identification) {
      sight3 = 'left'
    } else if (hackPosition < rightEdge && hackPosition > identification) {
      sight3 = 'right'
    }
    if (hackPosition === identification - 40 || hackPosition === identification - 80 || hackPosition === identification - 120 || hackPosition === identification - 120 || hackPosition === identification - 200 || hackPosition === identification - 240 || hackPosition === identification - 280 || hackPosition === identification - 320 || hackPosition === identification - 360 || hackPosition === identification - 400 || hackPosition === identification - 440 || hackPosition === identification - 480 || hackPosition === identification - 520 || hackPosition === identification - 560 || hackPosition === identification - 600) {
      sight3 = 'up'
    }
    if (hackPosition === identification + 40 || hackPosition === identification + 80 || hackPosition === identification + 120 || hackPosition === identification + 120 || hackPosition === identification + 200 || hackPosition === identification + 240 || hackPosition === identification + 280 || hackPosition === identification + 320 || hackPosition === identification + 360 || hackPosition === identification + 400 || hackPosition === identification + 440 || hackPosition === identification + 480 || hackPosition === identification + 520 || hackPosition === identification + 560 || hackPosition === identification + 600) {
      console.log('seen you: down')
      sight3 = 'down'
    }
  }
  function move() {

    smartMove(joshPosition)
    smartMove1(hankPosition)
    smartMove2(stephPosition)
    smartMove3(crakePosition)
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
      if ((cells[rightJosh].classList.contains('innerpath') && (random > 0 && random > 6) && (cells[rightJosh].classList.contains('been-here') === false)) || ((cells[rightJosh].classList.contains('innerpath')) && sight === 'right')) { 
        clearThePath(leftJosh)
        clearThePath(upJosh)
        clearThePath(downJosh)
        joshPosition += 1
        cells[joshPosition].classList.add('right')
      } else if ((cells[leftJosh].classList.contains('innerpath') && (random > 5 && random < 11) && (cells[leftJosh].classList.contains('been-here') === false)) || ((cells[leftJosh].classList.contains('innerpath')) && sight === 'left')) {
        clearThePath(rightJosh)
        clearThePath(upJosh)
        clearThePath(downJosh)
        joshPosition -= 1
        cells[joshPosition].classList.add('left')
      }  else if ((cells[upJosh].classList.contains('innerpath') && (random > 10 && random < 16) && (cells[upJosh].classList.contains('been-here') === false)) || ((cells[upJosh].classList.contains('innerpath')) && sight === 'up')) {
        clearThePath(downJosh)
        clearThePath(rightJosh)
        clearThePath(leftJosh)
        joshPosition = joshPosition - 40
        cells[joshPosition].classList.add('up')
      } else if ((cells[downJosh].classList.contains('innerpath') && (random > 15 && random < 21) && (cells[downJosh].classList.contains('been-here') === false)) || ((cells[downJosh].classList.contains('innerpath')) && sight === 'down')) {
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
      if ((cells[rightHank].classList.contains('innerpath') && (random > 0 && random > 6) && (cells[rightHank].classList.contains('been-here1') === false)) || ((cells[rightHank].classList.contains('innerpath')) && sight1 === 'right')) { 
        clearThePath1(leftHank)
        clearThePath1(upHank)
        clearThePath1(downHank)
        hankPosition += 1
        cells[hankPosition].classList.add('right')
      } else if ((cells[downHank].classList.contains('innerpath') && (random > 15 && random < 21) && (cells[downHank].classList.contains('been-here1') === false)) || ((cells[downHank].classList.contains('innerpath')) && sight1 === 'down')) {
        clearThePath1(upHank)
        clearThePath1(leftHank)
        clearThePath1(rightHank)
        hankPosition = hankPosition + 40
      } else if ((cells[upHank].classList.contains('innerpath') && (random > 10 && random < 16) && (cells[upHank].classList.contains('been-here1') === false)) || ((cells[upHank].classList.contains('innerpath')) && sight1 === 'up')) {
        clearThePath1(downHank)
        clearThePath1(leftHank)
        clearThePath1(rightHank)
        hankPosition = hankPosition - 40
        cells[hankPosition].classList.add('up')
      } else if ((cells[leftHank].classList.contains('innerpath') && (random > 5 && random < 11) && (cells[leftHank].classList.contains('been-here1') === false)) || ((cells[leftHank].classList.contains('innerpath')) && sight1 === 'left')) {
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
      if ((cells[leftSteph].classList.contains('innerpath') && (random > 5 && random < 11) && (cells[leftSteph].classList.contains('been-here2') === false)) || ((cells[leftSteph].classList.contains('innerpath')) && sight2 === 'left')) {
        clearThePath2(rightSteph)
        clearThePath2(upSteph)
        clearThePath2(downSteph)
        stephPosition -= 1
        cells[stephPosition].classList.add('left')
      } else if ((cells[downSteph].classList.contains('innerpath') && (random > 15 && random < 21) && (cells[downSteph].classList.contains('been-here2') === false)) || ((cells[downSteph].classList.contains('innerpath')) && sight2 === 'down')) {
        clearThePath2(upSteph)
        clearThePath2(leftSteph)
        clearThePath2(rightSteph)
        stephPosition = stephPosition + 40
      } else if ((cells[rightSteph].classList.contains('innerpath') && (random > 0 && random > 6) && (cells[rightSteph].classList.contains('been-here2') === false)) || ((cells[rightSteph].classList.contains('innerpath')) && sight2 === 'right')) { 
        clearThePath2(leftSteph)
        clearThePath2(upSteph)
        clearThePath2(downSteph)
        stephPosition += 1
        cells[stephPosition].classList.add('right')
      } else if ((cells[upSteph].classList.contains('innerpath') && (random > 10 && random < 16) && (cells[upSteph].classList.contains('been-here2') === false)) || ((cells[upSteph].classList.contains('innerpath')) && sight2 === 'up')) {
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
      if ((cells[leftCrake].classList.contains('innerpath') && (random > 0 && random > 6) && (cells[leftCrake].classList.contains('been-here3') === false)) || ((cells[leftCrake].classList.contains('innerpath')) && sight3 === 'left')) {
        clearThePath3(rightCrake)
        clearThePath3(upCrake)
        clearThePath3(downCrake)
        crakePosition -= 1
        cells[crakePosition].classList.add('left')
      } else if ((cells[upCrake].classList.contains('innerpath') && (random > 5 && random < 11) && (cells[upCrake].classList.contains('been-here3') === false)) || ((cells[upCrake].classList.contains('innerpath')) && sight3 === 'up')) {
        clearThePath3(downCrake)
        clearThePath3(leftCrake)
        clearThePath3(rightCrake)
        crakePosition = crakePosition - 40
        cells[crakePosition].classList.add('up')
      } else if ((cells[rightCrake].classList.contains('innerpath') && (random > 10 && random < 16) && (cells[rightCrake].classList.contains('been-here3') === false)) || ((cells[rightCrake].classList.contains('innerpath')) && sight3 === 'right')) { 
        clearThePath3(leftCrake)
        clearThePath3(upCrake)
        clearThePath3(downCrake)
        crakePosition += 1
        cells[crakePosition].classList.add('right')
      } else if ((cells[downCrake].classList.contains('innerpath') && (random > 15 && random < 21) && (cells[downCrake].classList.contains('been-here3') === false)) || ((cells[downCrake].classList.contains('innerpath')) && sight3 === 'down')) {
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
    smartMove(joshPosition)
    smartMove1(hankPosition)
    smartMove2(stephPosition)
    smartMove3(crakePosition)
    if ((hackPosition === joshPosition) && (buffTime !== 0)) {
      clearThePath(joshPosition)
      removeJosh(joshPosition)
      joshPosition = 409
    } else if ((hackPosition === hankPosition) && (buffTime !== 0)) {
      clearThePath1(hankPosition)
      removeHank(hankPosition)
      hankPosition = 168
    } else if ((hackPosition === stephPosition) && (buffTime !== 0)) {
      clearThePath2(stephPosition)
      removeSteph(stephPosition)
      stephPosition = 191
    } else if ((hackPosition === crakePosition) && (buffTime !== 0)) {
      clearThePath3(crakePosition)
      removeCrake(crakePosition)
      crakePosition = 591
    } else if (hackPosition === joshPosition || hackPosition === hankPosition || hackPosition === stephPosition || hackPosition === crakePosition) {
      killScreen()
    }
  }

  function moveEnd() {
    if ((hackPosition === 666 || hackPosition === 651 || hackPosition === 135 || hackPosition === 273) && (buffTime !== 0)) {
      killScreenTwo()
    } else if (hackPosition === 666 || hackPosition === 651 || hackPosition === 135 || hackPosition === 273) {
      powerDownBuffSpecific(hackPosition)
      buffHack()
    // } else if (hackPosition === 135 || hackPosition === 144 || hackPosition === 246 || hackPosition === 273) {
    //   powerDownGunSpecific(hackPosition)
    //   gunHack()
    } else if ((hackPosition === joshPosition) && (buffTime !== 0)) {
      clearThePath(joshPosition)
      removeJosh(joshPosition)
      joshPosition = 409
    } else if ((hackPosition === hankPosition) && (buffTime !== 0)) {
      clearThePath1(hankPosition)
      removeHank(hankPosition)
      hankPosition = 168
    } else if ((hackPosition === stephPosition) && (buffTime !== 0)) {
      clearThePath2(stephPosition)
      removeSteph(stephPosition)
      stephPosition = 191
    } else if ((hackPosition === crakePosition) && (buffTime !== 0)) {
      clearThePath3(crakePosition)
      removeCrake(crakePosition)
      crakePosition = 591
    } else if (hackPosition === joshPosition || hackPosition === hankPosition || hackPosition === stephPosition || hackPosition === crakePosition) {
      killScreen()
    } else if (scoreActual !== 1455) {
      addHack(hackPosition)
      getBonus()
    } else {
      winScreen()
    }
  }

  // function gunHack() {
  //   gunTimer = setInterval(() => {
  //     const right = (hackPosition + 1)
  //     const left = (hackPosition - 1)
  //     const up = (hackPosition - 40)
  //     const down = (hackPosition + 40)
  //     cells[hackPosition].classList.add('power-gun')
  //     cells[right].classList.remove('power-gun')
  //     cells[left].classList.remove('power-gun')
  //     cells[up].classList.remove('power-gun')
  //     cells[down].classList.remove('power-gun')
  //     if (gunTime === 10) {
  //       clearInterval(gunTimer)
  //       gunTimer = null
  //       gunTime = 0
  //       return
  //     }
  //     gunTime++
  //     console.log(gunTime)
  //   }, 10)
  // }
  function buffHack() {
    buffTimer = setInterval(() => {
      const right = (hackPosition + 1)
      const left = (hackPosition - 1)
      const up = (hackPosition - 40)
      const down = (hackPosition + 40)
      cells[hackPosition].classList.add('power-buff')
      cells[right].classList.remove('power-buff')
      cells[left].classList.remove('power-buff')
      cells[up].classList.remove('power-buff')
      cells[down].classList.remove('power-buff')
      if (buffTime === 100) {
        clearInterval(buffTimer)
        buffTimer = null
        buffTime = 0
      }
      buffTime++
      console.log(buffTime)
    }, 100)
  }
  function getThePartyStarted() {
    removeHack(hackPosition)
    hackPosition = 82
    removeJosh(joshPosition)
    removeHank(hankPosition)
    removeSteph(stephPosition)
    removeCrake(crakePosition)
    joshPosition = 409
    hankPosition = 168
    stephPosition = 191
    crakePosition = 591
    for (let i = 0; i < cellCount; i++) {
      cells[i].classList.remove('painted', 'been-here', 'been-here1', 'been-here2', 'been-here3')
    }
    playSpace.classList.remove('remove-grid')
    winner.classList.remove('win')
    killer.classList.remove('kill')
    secondKiller.classList.remove('kill')
    stopTheStartedParty()
    trueEndTimer()
    scoreBonus += scoreActual
    scoreActual = 0
    clearInterval(party)
    party = setInterval(move, 250)
    addHack(hackPosition)
    addJosh(joshPosition)
    addHank(hankPosition)
    addSteph(stephPosition)
    addCrake(crakePosition)
    document.addEventListener('keydown', handleKeyDown)
    addBonus()
    backgroundMusic()
    pauseButton.classList.remove('hidden')
    powerupBuff()
    clearInterval(buffTimer)
    buffTimer = null
    buffTime = 0
    // powerupGun()
  }

  function pauseParty() {
    trueEndTimer()
    clearInterval(party)
    document.removeEventListener('keydown', handleKeyDown)
    pauseMusic()
    pauseButton.classList.add('hidden')
    playButton.classList.remove('hidden')
    clearInterval(buffTimer)
    buffTimer = null
    buffTime = 0
  }

  function playParty() {
    party = setInterval(move, 250)
    addBonus()
    document.addEventListener('keydown', handleKeyDown)
    backgroundMusic()
    playButton.classList.add('hidden')
    pauseButton.classList.remove('hidden')
  }

  function stopTheStartedParty() {
    clearInterval(party)
    removeHack(hackPosition)
    removeJosh(joshPosition)
    removeHank(hankPosition)
    removeSteph(stephPosition)
    removeCrake(crakePosition)
    document.removeEventListener('keydown', handleKeyDown)
    pauseButton.classList.add('hidden')
    playButton.classList.add('hidden')
    clearInterval(buffTimer)
    buffTimer = null
    buffTime = 0
  }

  createGrid()

  resetButton.addEventListener('click', setBack)
  pauseButton.addEventListener('click', pauseParty)
  playButton.addEventListener('click', playParty)
  partySwitch.addEventListener('click', getThePartyStarted)
}

















window.addEventListener('DOMContentLoaded', init)