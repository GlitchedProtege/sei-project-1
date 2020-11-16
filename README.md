# Clean up crew

A Pacman clone to run in your browser.

## Deployed Link

https://liamcallaghan.github.io/sei-project-1/

## Technologies used

- JavaScript
- CSS
- HTML5 with Audio element
- Git
- GitHub

## Timeline

Day 1: Planning, setting out MVP, finding assets, drawing the maze.

After deciding to use Pacman as the basis for my cloned game, I sat down to plan the differences I would make and write some psuedocode for the things I was going to keep the same. I decided to start with drawing the maze that I would use as the map. I included multiple long stretches on the top of the maze in anticipation of a cut powerup, and winding corners on the bottom for the invincibility one. This is when I chose the color palette and started looking for assets to give the game a theme. Using www.OpenGameArt.org I found some great free icons and settled on a space theme.

Day 2: Building grid, creating character and movement controls, teleports.

As part of the tutorials we had proceeding this project, one of the things we were shown was how to build a grid and move an icon around it. Taking this basic code, I expanded the grid to be 800 cells and shrunk them to make the map. Making the character move was just removing the icon from the cell they are on, and displaying it on the cell + 1, - 1, + 40 or - 40 from the current one. I added the teleports in first, as they are basically just another kind of movement, but to preset cells. I decided to use classes to differentiate between the path the characters could move on and the walls of the maze. I manually wrote down what cells where going to be walls and which werent, and then used slice to add the class.

Day 3: Creating enemies, making grid walls stop movement, choosing color pallete, added points and score.

The next task was to make the walls solid to stop the player going off the map or through walls. The class I added wasnt just a color change, It is something to be checked before allowing movement onto that cell. I decided not to make a nest that the enemies came out of gradually, instead giving them each a corner to start in. Giving the enemies names was both a blessing and a curse. It would have been much easier to move code around if I had just given them numbers, though it did keep up morale while bug fixing to know that it was hank and josh that keep getting stuck. Creating the games win condition of filling in all the tiles while avoiding the enemies was an idea that came from how the enemies stop from turning back and forth forever. Moving a certain way on a random number generation, unless there is a wall or the cell they just moved from, required the enemies to 'paint' that cell for one turn. Making the players painted cells add to the score and persist was easy from there.

Day 4: Getting enemies to move on timers, not get stuck, added powerups/bonus points.

I made the enemies move on pretty quick timers to add some difficulty to the game, the player can move pretty quickly and has the added benefit of teleporting to the other side of the map. The powerups add a class to the player and stop all the enemies timers so you can get them. If you get to the same cell as an enemy while you have the powerup, your score goes up, a death animation plays and the enemy is moved to a cell called the 'factory' (cell[0]) until the timer runs out. Sometimes the death animation plays on this cell for some reason. The bonus has a random number generation to decide which fixed place it will spawn in on the map, the player then has only a certain amount of time to reach that cell before it dissapears. One exploit for the game is that, while the sign goes away when you activate it, you can re-visit that bonus cell as many times as you want before the timer runs out to get more points.

Day 5: Making enemies move towards the player, not loop, win and death screens.

Making the enemies move towards the player in a smart way was difficult, 

Day 6: Added powerups timer, start and pause buttons, score display.

Day 7: Added audio, bug fixing.

## Wins & Things Learned

I was really proud of how the enemies AI turned out.

## Challenges & Extra Features

As this was my first project there were a few issues I ran into. My code definitely repeats itself unnecessarily, although I figured that working messy code was better than clean code on a game that cant be played.
Creating the AI for the enemies was very tricky, I had a few ideas for how it would work. One was to have them move towards a certain cell relative to the player, like the ghosts in Pacman. I decided against this as I would have had to rework a lot of the code I had already written. The solution I went with in the end, with the sightlines and random movement otherwise, also had its problems. Until I added the painting cells behind them, the enemies would get into loops in the four corners of the grid.
I also had some issues with running multiple timers at once, this especially reared its head with the score-bonus and powerups. One workaround I implemented was to not let the player use two powerups at once, they cancel each other out. One thing I didnt see coming was the difference between the screen I was building and the screen other people would play the game on. If a user plays on a small screen, the arrow keys control the scroll bar as well as the player. 
If there had been more time to work on this game, there are some extra features I would have added. I was going to implement a different type of powerup that worked like a gun you could fire down a long path. I also had planned on making a two player mode, with the WASD buttons controlling player 2, Q and E to teleport. An extra thing I would have liked to put in is different mazes, or even an autogenerating maze for different levels.