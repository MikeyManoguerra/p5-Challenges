
let yValue = 0;
let speed = 2;

function setup(){
	createCanvas(500, 300);
}

function draw(){
	background(210);
	movingHorizontalLine();
	fixedLine();
}

function fixedLine(){
	strokeWeight(2);
	if(yValue > 150){
		strokeWeight(0); 
	}
	line(0, 150, width, 150);
}

function movingHorizontalLine(){
	strokeWeight(2);
	line(0, yValue, width, yValue);
	yValue += speed;

	if(yValue > 299 || yValue < 1){
		speed = -speed; // if reaches top or bottom, change speed to the opposite sign (positive, negative)
	}
}
