

/**
 * TODO:
 * Add functionality:
 *  slider for favorability rating, aka: the probability of tree growth
 * add functionality button to kill a random tree.
 * change frame rate
 * create surrounding text about forest ecology (html)
 * some sort of count of tree growth displayed?
 *  add more green colors
 * 
 * 
 */

let treeArray = [];
let treeColors = [];
let greens = [
  'green',
  'darkgreen',
  'forestgreen'
];
let slider;

function setup() {
  createCanvas(1800, 600);
  angleMode(DEGREES);
  setFrameRate(10);
  
  // dynamically genterated HTML elements
  slider = createSlider(0, 10, 1);
  slider.style('width', '80px');
  slider.style('margin-top', '40px');
  createP('This slider effects the growth favorability of the trees');
  let killButton = createButton('kill tree'); 
  killButton.mousePressed(killATree);
  // defines starting values for tree colors and tree size
  for (let i = 0; i < 10; i++) {
    treeArray[i] = floor(random(2, 4));
    let treeColorReference = floor(random(3));
    treeColors[i] = treeColorReference;
  }

}

function draw() {
  let favorability = slider.value();
  setBackgroundGradient(0, 0);
  // set noStroke, background is actually a series of many lines
  noStroke();
  moon();
  drawTreeRow();
  theGround();
  growTrees(favorability);
}

function killATree(){
  console.log('I do not Work yet');
}

function drawTreeRow() {
  //  loop over treeArray, which holds a number between 1 and 15, which becomes the tree size ratio
  for (let i = 0; i < treeArray.length; i++) {
    // get the size ratio
    let size = treeArray[i];
    // define the position as a multiplier of  of index (with one added so first tree is on screen)
    let position = (i + 1) * 150
    // treeColors contains numbers from 0-2, per tree. use that to get one of our current three tree colors.
    //  doing it this way means the tree remains the same color over the course of its life
    let treeColorReference = treeColors[i];
    // pass necessary variables on to function pineTree
    pineTree(size, position, treeColorReference);
  }
}

function growTrees(favorability) {
  //  favorability is a value so we can adjust the probability of a tree actually increasing in size per cycle
  for (let i = 0; i < treeArray.length; i++) {
    //  once trees become a certain size, they have a ~ 1/3 chance of dying per draw
    if (treeArray[i] > 15) {
      let probabilityOfDeath = 7 - random(10);
      if (probabilityOfDeath > 0) {
        // if tree dies, plant seedling and define its green color for the next life cycle
        treeArray[i] = 2;
        treeColors[i] = floor(random(3));
      }
    }
    // if tree is not full size, give it a chance of growing. here we use our favorability argument to affect conditions
    else {
      let probabilityOfGrowth = favorability - random(10);
      if (probabilityOfGrowth > 0)
        treeArray[i]++;
    }
  }
}

// over arching function where we distibute the arguments to sub functions to draw pieces
function pineTree(size, position, treeColorReference) {
  treeTrunk(size, position);
  //using our tree color below 
  fill(greens[treeColorReference]);
  treeBottom(size, position);
  treeMiddle(size, position);
  treeTop(size, position);

}

// lowest and largest triangle. bottom line of triangle only grows by one with size
function treeBottom(size, position) {
  let bottomX = size * 10;
  // organized arguments so they are more easily readable
  triangle(
    position,
    height - (100 + (size * 10)),
    position - bottomX,
    height - (40 + size),
    position + bottomX,
    height - (40 + size)
  );

}

// i built these with trial and error, this was the most annoying part of the project
function treeMiddle(size, position) {
  let middleX = size * 8;
  triangle(
    position,
    height - (120 + (size * 16)),
    position - middleX,
    height - (60 + (size * 6)),
    position + middleX,
    height - (60 + (size * 6))
  );
}

//  to stay sane, each triangle is made the same way. first the top point, then the bottom left, then the bottom right
function treeTop(size, position) {
  let topX = size * 6;
  triangle(
    position,
    height - (130 + (size * 25)),
    position - topX,
    height - (80 + (size * 12)),
    position + topX,
    height - (80 + (size * 12))
  );
}

function treeTrunk(size, position) {
  let trunkWidth;
  // the next line is a ternary function. we did not learn these, but just know its a single line way to evaluate a boolean condition,
  // rather than if/else
  size < 4 ? trunkWidth = 15 : trunkWidth = 20 + (size * 4);
  fill('#301600');
  //  trunk height adjusts with bottom triangles slight growth
  rect(position - (trunkWidth / 2), height - (42 + size), trunkWidth, 35 + size);

}


function theGround() {
  fill('sandybrown')
  rect(0, height - 8, width, height)
}

// https://p5js.org/examples/color-linear-gradient.html
// i pulled this directly from docs, and simplified it a ton.
function setBackgroundGradient(x, y) {
  noFill();
  let color1 = color('#021229');
  let color2 = color('#783904')

  for (let i = y; i <= y + height; i++) {
    let inter = map(i, 0, y + height, 0, 1);
    let c = lerpColor(color1, color2, inter);
    stroke(c);
    line(x, i, width, i);
  }
}

function moon() {
  fill('ivory')
  ellipse(100, 100, 75)

}