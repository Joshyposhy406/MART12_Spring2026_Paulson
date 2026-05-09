//variables for movment
var eyeX =130;
var eyeSpeed =2; //x-axis movment

var browY = 230;
var browSpeed = 1; //y-axis movment

var noseX = 170;
var noseY = 310;
var noseSpeedX = 0.6; //x-axis movment
var noseSpeedY = 0.9; //y-axis movment

//Title Variables
var textSizeval = 12;
var textMovment = 1;
var count = 0;

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  
  //Coordinate Tracker
  noStroke();
  textSize(12);
  fill(200, 0, 0,)
  text("x: " + mouseX + ", y: " + mouseY, 10, 20);


  stroke(12);
  strokeWeight(5);
  point(220, 260);
  line(150, 330, 190, 330);
  //line(40, 90, 85, 75);

//Head and Body
  noStroke();
  fill(80);
  circle(175, 280, 150); //My head
  rect(150, 340, 50, 60); //My body

//Eyes
  fill(200, 0, 0,)
  ellipse(eyeX, 260, 40, 20);
  ellipse(eyeX + 85, 260, 40, 20);

 eyeX = eyeX + eyeSpeed;
  if (eyeX > 150 || eyeX < 110) {
    eyeSpeed = eyeSpeed * -1;
  }

  //Eyebrows
  fill(200, 0, 0,)
  rect(120, browY, 30, 15);
  rect(195, browY, 30, 15);
  browY = browY + browSpeed;
  if (browY > 240 || browY < 210) {
    browSpeed = browSpeed * -1;
  }
  fill(200, 0, 0,)
  ellipse(170, 325, 65, 30);


// Y-AXIS MOVEMENT (Eyebrow Movement)
  fill(200, 0, 0);
  rect(120, browY, 30, 15);           
  rect(195, browY, 30, 15);           
  
  browY = browY + browSpeed;
  if (browY > 245 || browY < 215) {
    browSpeed = browSpeed * -1;
  }

  // DIAGONAL MOVEMENT  (Nose Movement))
  triangle(155, 280, noseX, noseY, 200, 280); 

  noseX = noseX + noseSpeedX;
  noseY = noseY + noseSpeedY;
  if (noseX > 185 || noseX < 155) { noseSpeedX *= -1; }
  if (noseY > 325 || noseY < 295) { noseSpeedY *= -1; }

  //Pupils match moving Eye)
  stroke(12);
  strokeWeight(5);
  point(eyeX, 260);
  point(eyeX + 85, 260);
  line(150, 330, 190, 330);
   //line(40, 90, 85, 75);

//Self Portrait Title
textSize(textSizeVal);
text("Josh Paulson", 137, 390);

  count++;
   if(count > 5){
      textSizeVal = textSizeVal + textMovement;
      count = 0; // reset count to 0 to start the next 5 frames cycle

    if (textSizeVal > 17 || textSizeVal < 12) {
        textMovement = textMovement * -1;
      }
    }
    noStroke();
  textSize(12);
  text("", 300, 370);
  text("", 10,90);
}
  
var textSizeVal = 12;
var size = 12;
var sizeDirection = 1;
var textMovement = 1;
var count = 0;





