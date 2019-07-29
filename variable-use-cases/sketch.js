


function setup() {
	createCanvas(500,500);
	noStroke();
	background('#f7e9ba'); //hexidecimal color

}

/* for this program to 'remember' the changes
 to a variable each time draw is called, we have 
to define the variable outside of draw, as we did with movingPoint
*/
let movingPoint = 50;

function draw(){

	/* to get a 'clean sheet of paper' 
	every time draw is called, we must use background
	inside of draw. (un)comment to see the difference
	*/
	background(218, 185, 240); // rgb color

	variableIncrementsOnEachDraw();
	variableValueResetForEachDraw();
	console.log('The value of movingPoint is: ',movingPoint);
	
	// once movingPoint equals 450, stop calling draw
	if(movingPoint === 450){
		// noLoop();
		movingPoint =0;
	}
	
}


function variableValueResetForEachDraw(){
	//define a variable and set it to a number value
	let myPointX = 150;
	console.log('The first myPointX value is: ',myPointX);
	// use it to put an circle on the page
	fill('maroon');
	ellipse(myPointX, 100, 75, 75);
	// change the value of the variable
	myPointX = myPointX + 100;
	console.log('The second myPointX value is: ',myPointX);
	// draw the second circle to see the results of the change
	fill('seagreen');
	ellipse(myPointX, 100, 75, 75);
	/*  these two circles do not move because the 
	value of myPointX is reset every time this function is called.
	*/
}

function variableIncrementsOnEachDraw(){
	// draw the circle
	fill('orangered');
	ellipse(movingPoint, 250, 75, 75);
	// then, increment the variable movingPoint by 1
	movingPoint = movingPoint + 1;
}



