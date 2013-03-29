Conway's Game of Life
===

JavaScript Versions
---

To make things more insteresting, we present two approachs to the problem. One will use pure html and Backbone.js, and the other will use a canvas object using Processing.js.

In addition to the basic game rules, this user interface should implement the following features:

- Change the duration of each generation.
- Step by Step execution.
- Load patterns from file, text or Local Storage.
- Save patterns to Local Storage or file.

And the user should set the initial state of the game's world by selecting the initial state of any cell by clicking it. Clicking a cell toggles the state of the cell.
The application should warn the user if the initial pattern will not survive the fist generation.

The recomended grid size is, at least, 38 cells wide by 12 cells tall, to have at least room for a [Gosper Glider Gun](http://en.wikipedia.org/wiki/Gun_(cellular_automaton). This pattern should be provided as a demostration of loading stored patterns.