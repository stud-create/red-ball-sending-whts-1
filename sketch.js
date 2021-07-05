//matter.js files
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//variables
var engine, world
var ball,box,homebg,lives,bg
var ballimg1,ballimg2,ballimg3,ballimg4,ballimg5,ballimg6,ballimg7,bgimg,boximg1,boximg2,homebgimg,livesimg
var ground
//loading images
function preload(){
ballimg1=loadImage("ballbasic.png")
ballimg2=loadImage("ball2.png")
ballimg3=loadImage("ball3.png")
ballimg4=loadImage("ball4.png")
ballimg5=loadImage("ball5.png")
ballimg6=loadImage("ball6.png")
ballimg7=loadImage("ball7.png")
bgimg=loadImage("bgimg.png")
boximg1=loadImage("box1.png")
boximg2=loadImage("box2.png")
homebgimg=loadImage("homebg.jpg")
livesimg=loadImage("lives.png")
}
//making sprites
function setup(){
  createCanvas(1000,500)
  engine = Engine.create();
  world = engine.world;

//bg = createSprite(500,220,20,20)
//bg.addImage(bgimg)
//bg.velocityX=-1

ball = new Ball(100,50,20);
ground = new Ground(500,325,1000,20)

}
function draw(){
  background(bgimg);
 Engine.update(engine);
//making bg infinite
 //if(bg.x<200){
//bg.x=500
 //}
 //displaying all
 ball.display()
 ground.display()
 //text
 textSize(30)
 fill('black')
 text("NOTE* To Move Ball Use Arrow Keys",100,400)
 drawSprites()
}
function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{
      x:10,y:-1
    })
  }
  if(keyCode===LEFT_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{
      x:-10,y:-1
    })
  }
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{
      x:0,y:-25
    })
  }
}
  