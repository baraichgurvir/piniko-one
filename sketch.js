const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var groundimg;

var Balls = [];
var Ball_Barriers = [];
var divisions = [];

function setup() { 
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 785, 480, 30);

  for (var i = 5; i <= width; i = i + 78){
    divisions.push(new Division(i, height-300/2, 10, 300));
  }

  for (var j = 40; j <= width; j = j + 50){
    Ball_Barriers.push(new Ball_Barrier(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    Ball_Barriers.push(new Ball_Barrier(j, 150));
  }
  for (var j = 40; j <= width; j = j + 65){
    Ball_Barriers.push(new Ball_Barrier(j, 225));
  } 
}

function draw() {
  Engine.update(engine);
  background(232, 255, 255 );
  
  if (frameCount % 60 === 0){
    Balls.push(new Ball(random(width/2-30, width/2+30), 10, 10));
  }

  ground.display();
  
  for (var k = 0; k < Balls.length; k++){
    Balls[k].display();
  }

  for (var j = 0; j < Ball_Barriers.length; j++){
    Ball_Barriers[j].display();
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  drawSprites();
  
  
}

