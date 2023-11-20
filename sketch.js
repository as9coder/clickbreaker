var click, clickImg;
var count=1000000;

function preload(){
  clickImg= loadImage("click.gif");
}

function setup() {
  createCanvas(windowWidth-8, windowHeight-8);

  click= createSprite(width/2, height/2, 20,20);
  click.addImage(clickImg);
  click.scale= 0.2;

  count= localStorage.getItem('count')|| 1000000;
}

function draw() 
{
  background(30);

  textSize(30);
  fill("red");
  text("CLICK ME", width/2-60, height/2+100);
  textSize(20);
  text("CLICKED: "+count+" Times", width-250, height/9);

  if(touches.length > 0||mousePressedOver(click)){
    count-=1;
    local();
    touches = [];
  }

  if(count<=0){
    text("YOU ARE EXTRAORDINARY", width/2, height-100);
  }

  local();

  drawSprites();
}

function local(){
  localStorage.setItem('count',count);
}




