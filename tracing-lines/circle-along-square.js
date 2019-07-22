
let x = 102;
let y = 100;
let speed = 2;
let horizontal = true;
let vertical = false;

function setup() {
	createCanvas(500, 500);
}


function draw() {
	background(1)
	traceASquare();
	// console.log(x,y)
	traceALine();
}

function traceASquare() {
	ellipse(x, y, 20);
	if (x > 100 && x < 400) {
		x = x + speed;
		horizontal = true;

	}
	if (x >= 400 && y < 400) {
		y = y + speed;
		horizontal = false;

	}
	if (x >= 400 && y >= 400) {
		speed = -speed;
		x = x + speed;
	}
	if (x <= 100) {
		y = y + speed;
		horizontal = false;

	}
	if (y < 100) {
		speed = -speed;
		y = 100;
		x = 102;
	}
}

function traceALine() {
	stroke(255);
	line(100, 100, 400, 100)
	line(400, 100, 400, 400)
	line(400, 400, 100, 400)
	line(100, 400, 100, 100)

	if (speed < 0 && !horizontal) {
		console.log('left')
	}
	if (speed < 0 && horizontal) {
		console.log('bottom')
	}
	if (speed > 0 && !horizontal) {
		console.log('right')
	}
	if (speed > 0 && horizontal) {
		console.log('top')
	}

}



