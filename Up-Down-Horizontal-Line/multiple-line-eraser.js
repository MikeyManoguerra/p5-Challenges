
let yValue = 0;
let speed = 2;

function setup(){
	createCanvas(500, 300);

}

function draw(){
	background(210);
	movingHorizontalLine();
	fixedLine(50);
	fixedLine(100);
	fixedLine(150);
	fixedLine(200);
	fixedLine(250);


}

function fixedLine(yPlacement){
	//  create the conditions for disappearing line, and using its parameter as its vertical position
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
