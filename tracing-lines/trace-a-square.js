
let x = 100;
let y = 100;
let speed = 3;

function setup(){
	createCanvas(500,500);
}


function draw(){
	// background(1)
	ellipse(x , y, 20);
	if(x >= 100 && x <= 400){
		x = x + speed;
	}
	if(x > 400 && y <= 400){
		y = y + speed;
	}
	if( x > 400 && y > 400){
		speed = -speed;
		x = x + speed;
	}
	if(x < 100){
		y = y + speed; 
	} 
	if(y < 100){
		speed = -speed;
		y = 100;
		x = 100;
	} 
}

