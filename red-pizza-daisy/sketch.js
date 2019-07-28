
let click = 0;
let counter = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noFill();
  background(210);
  setFrameRate(1);
  addAButton();
}

function draw() {
  // keeping draw() simple.
  handleViewToDraw();
}


// again, encapsulating related functionality and compartmentalizing
function addAButton(){
  let myButton = createButton('BUTTON');
  myButton.mousePressed(buttonAction);
  myButton.style('display', 'block');
  myButton.style('font-size', '40px');
  myButton.style('padding', '10px 20px');
	myButton.style('margin','10px 90px');
	myButton.style('background-color', 'lightblue');
	myButton.style('color', 'maroon');

}

// increments click, and resets our counter for each click
function buttonAction() {
  if (click === 2) {
    click = 0;
    counter = 0;
  }
  else {
    click++;
    counter = 0;
  }
}

function handleViewToDraw() {
  //  my  variable called 'click' is incrementing  when the screen is clicked. it can be 0, 1 or 2. this 
  // this is because i have three possible screens, so a simple true false toggle would not work
  if (click === 0) {
    redSquare();
  }
  if (click === 1) {
    blueTriangleSurprise();
  }
  if (click === 2) {
    drawDaisyView();
  }
}

function drawDaisyView(){

  //this is the confusing one. here i have a seperate counter variable 
  //  if counter is 0, set the background color, but i do not want the background color to keep resetting
  //  (as to see multiple flowers) so  background is called  only once on this view
  if (counter === 0) {
    background('lightblue');
  }
  // checks to see if we have hit out allotted number of daisies
  if (counter >= 8) {
    // reset our incrementing variables
    click = 0;
    counter = 0;
		 // this return term explitly sends back a value. (you will encounter this much more later). Here, it stops the rest of the code 
    //  below, in the drawDaisyView function, from running.
    return redSquare();
  }

  //  our x value for our flower is slowly increased with each flower, while our y value is random in the top three quarters of the canvas
  let x = (counter + 1) * 40;
  let y = random(0, height - 100);
  drawFlower(x, y);
  counter++;
}


function redSquare() {

  //  muted rainbow random background
  background(random(200), random(200), random(200));

  fill('maroon');
  myStroke(3, 'white');
  rect((width / 2) - 75, (height / 2) - 75, 125, 150);

  myTextStyling();
  text('click Button', (width / 2) - 62, height / 2);
}

function blueTriangleSurprise() {

  background(0, 0, random(255));
  //  second place counter variable is in use, but under a different context. if counter is even, show contents of illuminati
  // otherwise, show pizza
  if (counter % 2 === 0) {
    illuminati(counter);
  }
  else {
    pizza();
  }
  // increment counter
  counter++;
}


function drawFlower(x, y) {
//  random amt of petals, but as more flowers a drawn the lower bound of petal numbers increase
  let petals = floor(random(counter, 11));
  //  the rest of this should look very similar to the garden challenge
  push();
  translate(x, y);
  // custom myStroke
  myStroke(3, 'green');
  line(0, 0, 0, 75);
  line(0, 30, 10, 20);
  stroke('white');
  fill('yellow');
  ellipse(0, 0, 20);

  for (let i = 0; i < petals; i++) {
    rotate(360 / petals);

    fill('white');
    ellipse(25, 0, 27, 10);
  }
  pop();
}


function illuminati(counter) {
  let myColor;
  //  using the counter variable one last time. here, every third illuminati will have a green eye (shows up every six seconds).
  if (counter % 6 === 0) {
    myColor = 'green';
  }

  else {
    myColor = 'white';
  }
  // custom myStroke
  myStroke(3, 'white');
  fill(myColor);
  ellipse(width / 2, height / 2, 100, 50);
  fill(0, 200, 200);
  ellipse(width / 2, height / 2, 45, 45);
  fill(1);
  ellipse(width / 2, height / 2, 15, 15);
  noFill();

  // custom bigTriangle	
  bigTriangle();

  // custom uniform text styling
  myTextStyling();
  text('illumunati', (width / 2) - 40, 300);
}


function pizza() {

  fill('yellow');
  noStroke();
	
  // custom bigTriangle
  bigTriangle();

  // custom myStroke
  myStroke(15, 'orange');
  arc(width / 2, 180, 265, 255, 40, 140, OPEN);

  // custom pepperoni
  pepperoni();

  // custom text styling
  myTextStyling();
  text('Pizza', (width / 2) - 24, 355);



}

//   i got kinda lazy and just threw circles on the screen until it looked ok
//  some sort of programattic loop that printed a pyramid shaped grid might have been better
//  but i ran out of energy to figure it out
function pepperoni() {
  noStroke();
  fill('orangered');
  ellipse(203, 130, 20);
  ellipse(170, 240, 20);
  ellipse(230, 170, 20);
  ellipse(210, 190, 20);
  ellipse(270, 260, 20);
  ellipse(210, 160, 20);
  ellipse(170, 200, 20);
  ellipse(190, 170, 20);
  ellipse(190, 190, 20);
  ellipse(160, 260, 20);
  ellipse(210, 240, 20);

}


//  custom function standardizing all  text, to avoid cross interactions from other stylings. 
//  could create a couple to call before specific different texts, or give it a variable argument that can keep color same, but accept
// different sizes. skys the limit!
function myTextStyling() {
  strokeWeight(0);
  fill('white');
  textSize(20);
}

// yep
function bigTriangle() {
  triangle(width / 2, height / 4, width / 4, 2 * height / 3, 3 * width / 4, 2 * height / 3);
}

//  similar to myTextStyling, this is pure laziness (or the genius of computers??), turning two lines into one, and using 
// wherever possible
function myStroke(weight, color) {
  stroke(color);
  strokeWeight(weight);
}