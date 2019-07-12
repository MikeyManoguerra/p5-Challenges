
let yValue = 0;
let speed = 2;

function setup(){
	createCanvas(500, 300);

}

function draw(){
	background(210);
	movingHorizontalLine();
	createfixedLinesWithForLoop();

}

function createfixedLinesWithForLoop(){
	// creates 5 lines by calling dissappearingLine 5 times
	// to get the yPlacement, multiply i * 50

	for (let i = 1 ; i < 6; i++) {
		let yPlacement = i * 50;
	 	fixedLine(yPlacement)
	}
}


function fixedLine(yPlacement){
	strokeWeight(2);
	if(yValue > yPlacement){
		strokeWeight(0);
	}
	line(0, yPlacement, width, yPlacement);
}

function movingHorizontalLine(){
	strokeWeight(2);
	line(0, yValue, width, yValue);
	yValue += speed;
	if(yValue > 299 || yValue < 1){
		speed = -speed;
	}
}