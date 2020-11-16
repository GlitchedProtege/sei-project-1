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

As part of the tutorials we had proceeding this project, one of the things we were shown was how to build a grid and move an icon around it. Taking this basic code, I expanded the grid to be 800 cells and shrunk them to make the map. Making the character move was just removing the icon from the cell they are on, and displaying it on the cell + 1, - 1, + 40 or - 40 from the current one.. I added the teleports in first, as they are basically just another kind of movement, but to preset cells.

Day 3: Creating enemies, making grid walls stop movement, choosing color pallete, added points and score.

Giving the enemies names was both a blessing and a curse. It would have been much easier to move code around if I had just given them numbers, though it did keep up morale while bug fixing to know that it was hank that moved through 

Day 4: Getting enemies to move on timers, not get stuck, added powerups/bonus points.

Day 5: Making enemies move towards the player, not loop, win and death screens.

Day 6: Added powerups timer, start and pause buttons, score display.

Day 7: Added audio, bug fixing.

## Wins & Things Learned

I was really proud of how the enemies AI turned out.

## Challenges & Extra Features

As this was my first project there were a few issues I ran into. My code definitely repeats itself unnecessarily, although I figured that working messy code was better than clean code on a game that cant be played.
Creating the AI for the enemies was very tricky, I had a few ideas for how it would work. One was to have them move towards a certain cell relative to the player, like the ghosts in Pacman. I decided against this as I would have had to rework a lot of the code I had already written. The solution I went with in the end, with the sightlines and random movement otherwise, also had its problems. Until I added the painting cells behind them, the enemies would get into loops in the four corners of the grid.
I also had some issues with running multiple timers at once, this especially reared its head with the score-bonus and powerups. One workaround I implemented was to not let the player use two powerups at once, they cancel each other out. One thing I didnt see coming was the difference between the screen I was building and the screen other people would play the game on. If a user plays on a small screen, the arrow keys control the scroll bar as well as the player. 
If there had been more time to work on this game, there are some extra features I would have added. I was going to implement a different type of powerup that worked like a gun you could fire down a long path. I also had planned on making a two player mode, with the WASD buttons controlling player 2, Q and E to teleport. An extra thing I would have liked to put in is different mazes, or even an autogenerating maze for different levels.