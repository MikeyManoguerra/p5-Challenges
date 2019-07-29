function setup() {
	createCanvas(600,400);
	
}

let valueX = 0;
let speedX = 3;

let valueY = 0;
let speedY = 3;






function draw(){

	background('red');
	noStroke();
	// 	if i am using both functions the x speed is doubled because we are incrementing it twice
	oneDirectionalBounce();
	twoDirectionalBounce();

}





function oneDirectionalBounce(){
	
	fill('darkBlue');
	ellipse(valueX, 200, 50, 50);

	valueX = valueX + speedX;

	if(valueX > width|| valueX < 0){
		speedX = -speedX;
	}
}

function twoDirectionalBounce(){
	fill('darkslategray');
	ellipse(valueX, valueY, 50, 50);

	valueX = valueX + speedX;
	
	valueY += speedY;


	if(valueX > 600|| valueX < 0){
		speedX = -speedX;
	}

	if(valueY > height || valueY < 0){
		speedY = - speedY;
	}
}