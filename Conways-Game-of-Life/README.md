Conway's Game of Life
===

This folder will contain different implementations of the famous [Conway's Game of Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life). Not like other katas, this one needs a user interface, but you can have fun with tests too.

![image](http://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif)

The rules are quite simple:

- Any live cell with fewer than two live neighbors dies (loneliness by under-population).
- Any live cell with two or three live neighbors lives on to the next generation.
- Any live cell with more than three live neighbors dies (crashed by over population).
- Any dead cell with no more and no less than three neighbors comes to life.

Some history, from [Wikipedia](http://en.wikipedia.org/wiki/Conways_Game_of_Life):

> Conway was interested in a problem presented in the 1940s by mathematician John von Neumann, who attempted to find a hypothetical machine that could build copies of itself and succeeded when he found a mathematical model for such a machine with very complicated rules on a rectangular grid. The Game of Life emerged as Conway's successful attempt to drastically simplify von Neumann's ideas. The game made its first public appearance in the October 1970 issue of Scientific American, in Martin Gardner's "Mathematical Games" column. From a theoretical point of view, it is interesting because it has the power of a universal Turing machine: that is, anything that can be computed algorithmically can be computed within Conway's Game of Life.