let currentTime = new Date();

let hour = 0;
let minutes = 0;
let hourangle = 0;

let b = 0;
let direction = 0;


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    hour = currentTime.getHours();
    hourangle = (hour % 12).map(0,12,0,TWO_PI)
    minutes = currentTime.getMinutes();
   console.log(minutes);
    frameRate(30);

    

  
}

let value = 255;
function draw(){
    background( 255, 255, 255 );


    rotate( hourangle );


fill( value);
noStroke();
triangle(30, -100, 58, -150, 85, -100);



if(minutes >= 1){ 
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, -95, 100, -95);
   }
  
if(minutes >= 2){
   fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, -90, 100, -90);
   }

if(minutes >= 3){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, -85, 100, -85);
}

if(minutes >= 4){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, -80, 100, -80);
}

if(minutes >= 5){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, -75, 100, -75);
}

if(minutes >= 6){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, -70, 100, -70);
}

if(minutes >= 7){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, -65, 100, -65);
}

if(minutes >= 8){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, -60, 100, -60);
}

if(minutes >= 9){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, -55, 100, -55);
}

if(minutes >= 10){
    fill( 232, 5, 253);
    noStroke();
    rect(10, -50, 100, 10);
}

if(minutes >= 11){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, -35, 100, -35);
}

if(minutes >= 12){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, -30, 100, -30);
}

if(minutes >= 13){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, -25, 100, -25);
}

if(minutes >= 14){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, -20, 100, -20);
}

if(minutes >= 15){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, -15, 100, -15);
}

if(minutes >= 16){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, -10, 100, -10);
}

if(minutes >= 17){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, -5, 100, -5);
}

if(minutes >= 18){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 0, 100, 0);
}

if(minutes >= 19){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 5, 100, 5);
}

if(minutes >= 20){
fill( 232, 5, 253);
noStroke();
rect(10, 10, 100, 10);
}

if(minutes >= 21){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, 25, 100, 25); 
}

if(minutes >= 22){    
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, 30, 100, 30);
}

if(minutes >= 23){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, 35, 100, 35);
}

if(minutes >= 24){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, 40, 100, 40);
}

if(minutes >= 25){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, 45, 100, 45);
}


if(minutes >= 26){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, 50, 100, 50);
}

if(minutes >= 27){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, 55, 100, 55);
}

if(minutes >= 28){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, 60, 100, 60);
}

if(minutes >= 29){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, 65, 100, 65);
}

if(minutes >= 30){
    fill( 232, 5, 253);
    noStroke();
    rect(10, 70, 100, 10);
}

if(minutes >= 31){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 85, 100, 85);
}

if(minutes >= 32){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 90, 100, 90);
}

if(minutes >= 33){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 95, 100, 95);
}

if(minutes >= 34){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 100, 100, 100);
}

if(minutes >= 35){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 105, 100, 105);
}

if(minutes >= 36){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 110, 100, 110);
}

if(minutes >= 37){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 115, 100, 115);
}

if(minutes >= 38){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 120, 100, 120);
}

if(minutes >= 39){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 125, 100, 125);
}

if(minutes >= 40){
fill( 232, 5, 253);
noStroke();
rect(10, 130, 100, 10); 
}
if(minutes >= 41){ 
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, 145, 100, 145);
}

if(minutes >= 42){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, 150, 100, 150);
}

if(minutes >= 43){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, 155, 100, 155);
}

if(minutes >= 44){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, 160, 100, 160);
}

if(minutes >= 45){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, 165, 100, 165);
}

if(minutes >= 46){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, 170, 100, 170);
}

if(minutes >= 47){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, 175, 100, 175);
}

if(minutes >= 48){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, 180, 100, 180);
}

if(minutes >= 49){
    fill( 0, 100, 25 );
    stroke(253, 227, 5);
    line(15, 185, 100, 185);
}

if(minutes >= 50){
    fill( 232, 5, 253);
    noStroke();
    rect(10, 190, 100, 10);
}

if(minutes >= 51){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 205, 100, 205);
}

if(minutes >= 52){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 210, 100, 210);
}

if(minutes >= 53){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 215, 100, 215);
}

if(minutes >= 54){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 220, 100, 220);
}

if(minutes >= 55){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 225, 100, 225);
}

if(minutes >= 56){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 230, 100, 230);
}

if(minutes >= 57){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 235, 100, 235);
}

if(minutes >= 58){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 240, 100, 240);
}

if(minutes >= 59){
fill( 0, 100, 25 );
stroke(253, 227, 5);
line(15, 245, 100, 245);
}
}
function mousePressed() {
    if (value === 255){
    value = 0;
    } else {
        value = 255;
    }
}





Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

