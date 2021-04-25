
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground;
var engine,world;
var particle;
var score=0;
var count=0;
var particles=[particle];
var plinkos=[];
var divisons=[];
var divisonHeight=300;
var line;
var gameState="PLAY";


function setup() {
 var canvas= createCanvas(400,800);
  engine=Engine.create();
  world=engine.world
 ground=new Ground(225,790,450,10);
 

for (var i=0; i <=width; i=i+50){
  divisons.push(new Divisons(i,height-divisonHeight/2,10,divisonHeight))
}

 for(var j =40; j <=width; j=j+50)
 {
   plinkos.push(new Plinkos(j,75,30));
 }

 for(var j =15; j <=width; j=j+50)
 {
   plinkos.push(new Plinkos(j,175,30));
 }
 for(var j =40; j <=width; j=j+50)
 {
   plinkos.push(new Plinkos(j,275,30));
 }
 for(var j =15; j <=width; j=j+50)
 {
   plinkos.push(new Plinkos(j,375,30));
 }

//  divison1=new Divisons(0,710,10,450);
//  divison2=new Divisons(80,710,10,450);
//  divison3=new Divisons(160,710,10,450);
//  divison4=new Divisons(240,710,10,450);
//  divison5=new Divisons(320,710,10,450);
//  divison6=new Divisons(396,710,10,450);
Engine.run(engine);
 
}

function draw() {
  background(2);  
 Engine.update(engine);

textSize(30)
text("SCORE:",+score,25,50)
fill(255)

textSize(15)
text("500",10,550)
text("500",60,550)
text("500",110,550)
text("500",160,550)
text("100",210,550)
text("100",260,550)
text("100",310,550)
text("200",360,550)
text("200",410,550)
text("200",460,550)

ground.display();
// divison1.display()
// divison2.display()
// divison3.display()
// divison4.display()
// divison5.display()
// divison6.display()






if(particle!=null){
      particle.display();
      if(particle.body.position.y > 760)
      {
      if(particle.body.position.x < 300)
      {
       score=score+500;
       particle=null;
       if(count>= 5) gameState="END";
   
      }    
       else if(particle.body.position.x<600 && particle.body.position.x>301)
       {
       score=score+100;
       particle=null;
       if(count>= 5) gameState="END";
       }
        else if(particle.body.position.x<900 && particle.body.position.x>601)
        {
        score=score+200;
        particle=null;
        if(count>= 5) gameState="END";
          }

  }
}
if(gameState=="END"){
  background("black")
  fill("red")
  textSize(100);
  text("GAME OVER",200,400)
}

for(var n =0; n< divisons.length ; n++){
  divisons[n].display()
}


// if(frameCount%90===0){
//    particles.push(new Particle (random(width/2-10,width/2+10),10,10))
//  }


//  for(var h =0; h< particles.length ; h++){
//    particles[h].display();
//  }


for(var j =0; j< plinkos.length ; j++){
  plinkos[j].display();
}

  drawSprites();
  
}

function mousePressed(){
if(gameState !="END"){
  count++;
  particle=new Particle(mouseX,50,10,10);
}

}