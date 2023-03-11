# move-adventurer-small

Move an adventurer 🤠 around a simple world. A simple demo for students of JavaScript.

## Concepts shown

In this project we explore some basic JS concepts like event listeners, DOM manipulation, objects, functions and state.

We also show some simple flex box and grid in the CSS.

## Code Assignments

The point of this project is for you to read it and figure out what the code does and why. Then move on to expand the project. Some questions to begin with:

- Why is renderMain() called on line 68?
- What does the two for-loops do on lines 35 and 38?
- What does the if statement on line 43 do?
- What is the purpose of starting the funciton renderMain with line 33?

  Below is a list of suggestions for things to do with this code base.

Do as many as you want in any order!

1. Where in the code is the start position of the adventurer set? Change start position. Test to make sure your changes works.
2. Can you change the size of the map?
3. Can you change the adventurer emoji?
4. There is a bug in the code. Find it and fix it.

### Hints

1. There is an object literal with all the properties of the adventurer
2. There is an object literal with the properties for the world.
3. See 2 above.
4. The bug in the code can be found by opening the html file in your browser and playing around with the move buttons. The bug is fixed by adding to the move functions so that movement is limited to the size of the map.

## Further Development

When you feel you understand the code it is time to develop it further by adding new features. Here are some suggestions:

- Create a better map visually. Add images to the squares that the adventurer move over. The images could be different types of terrain. This map could be generated randomly and should be stored in some way.
- Add some pick-up for the adventurer to move to and take. Once one is taken then spawn a new one at a random location.
- Instead of moving the adventurer over the map, move the map behind the adventurer. This means the adventurer stays in place in the middle of the map. Increase the size of the map to say 20x20 squares though only showing the 7x7 that the adventurer is currently standing in the middle of.
