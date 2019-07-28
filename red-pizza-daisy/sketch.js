


let click = 0;
let counter = 0;

function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES);
	noFill();
	background(210);
	setFrameRate(1);

}

function draw() {
	if (click === 1) {
		blueTriangleSurprise();
	}
	if (click === 0) {
		redSquare();
	}
	if (click === 2) {
		if (counter === 0) {
			background('lightblue');
		}
		if (counter >= 8) {
			click = 0;
			counter = 0;
			return redSquare();
		}

		let x = (counter + 1) * 40;
		let y = random(0, height - 100);
		drawFlower(x, y);
		counter++;
	}
}


function mousePressed() {
	if (click === 2) {
		click = 0;
		counter = 0;
	}
	else {
		click++;
		counter = 0;
	}
}

function redSquare() {
	
	background(random(200), random(200), random(200));
	
	fill('maroon');
	myStroke(3, 'white');
	rect((width / 2) - 50, (height / 2) - 75, 100, 150);
	
	myTextStyling();
	text('click here', (width / 2) - 42, height / 2);
}

function blueTriangleSurprise() {
	
	background(0, 0, random(255));

	if (counter % 2 === 0) {
		illuminati(counter);
	}
	else {
		pizza();
	}

	counter++;
}


function drawFlower(x, y) {
	
	let petals = floor(random(counter, 11));
	
	push();
	translate(x, y);
	
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
	
	if (counter % 6 === 0) {
		myColor = 'green';
	}
	
	else {
		myColor = 'white';
	}
	myStroke(3, 'white');
	fill(myColor);
	ellipse(width / 2, height / 2, 100, 50);
	fill(0, 200, 200);
	ellipse(width / 2, height / 2, 45, 45);
	fill(1);
	ellipse(width / 2, height / 2, 15, 15);
	noFill();
	
	bigTriangle();
	
	myTextStyling();
	text('illumunati', (width / 2) - 40, 300);
}


function pizza() {
	
	fill('yellow');
	noStroke();
	bigTriangle();
	
	myStroke(15, 'orange');
	arc(width / 2, 180, 265, 255, 40, 140, OPEN);
	
	pepperoni();
	
	myTextStyling();
	text('Pizza', (width / 2) - 24, 355);



}

function pepperoni() {
	noStroke();
	fill('orangered');
	ellipse(203, 130, 20, 20);
	ellipse(170, 240, 20, 20);
	ellipse(230, 170, 20, 20);
	ellipse(210, 190, 20, 20);
	ellipse(270, 260, 20, 20);
	ellipse(210, 160, 20, 20);
	ellipse(170, 200, 20, 20);
	ellipse(190, 170, 20, 20);
	ellipse(190, 190, 20, 20);
	ellipse(160, 260, 20, 20);
	ellipse(210, 240, 20, 20);

}

function myTextStyling() {
	strokeWeight(0);
	fill('white');
	textSize(20);
}


function bigTriangle() {
	triangle(width / 2, height / 4, width / 4, 2 * height / 3, 3 * width / 4, 2 * height / 3);
}

function myStroke(weight, color) {
	stroke(color);
	strokeWeight(weight);
}