let circleX = 26;
let speed = 1;


function setup(){
	createCanvas(400, 300);
}

function draw(){

	background(201, 255, 220);
	noFill();
	ellipse(circleX, 150, 50);
	
	line(circleX + 25, 150, width, 150);
	line(0, 150, circleX - 25, 150);
	
	circleX = circleX + speed;
	
	if( circleX >= 374 || circleX <= 26){
		speed = -speed;
	}
}