
let yValue = 0;
let speed = 2;

function setup(){
	createCanvas(500, 300);

}

function draw(){
	background(210);
	movingHorizontalLine();
	disappearingLine(50);
	disappearingLine(100);
	disappearingLine(150);
	disappearingLine(200);
	disappearingLine(250);


}

function disappearingLine(yPlacement){
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
