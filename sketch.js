var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var division1,division2,division3,divosion4,division5,division6,division7,division8,division9,division10,divsion11;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  division1 = new Divisions(0,750,18,350);
  division2 = new Divisions(80,750,10,350);
  division3 = new Divisions(160,750,10,350);
  division4 = new Divisions(240,750,10,350);
  division5 = new Divisions(320,750,10,350);
  division6 = new Divisions(400,750,10,350);
  division7 = new Divisions(480,750,10,350);
  division8 = new Divisions(560,750,10,350);
  division9 = new Divisions(640,750,10,350);
  division10= new Divisions(720,750,10,350);
  division11= new Divisions(800,750,18,350);
   /*for (var k = 0; k <=width; k = k + 80) {
     divisions=new Divisions(k, height-divisionHeight/2, 10, divisionHeight);
   }*/


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   //for (var k = 0; k < divisions.length; k++) {
     
     //divisions[k].display();
   //}
   ground.display(); 
   division1.display();
   division2.display();
   division3.display();
   division4.display();
   division5.display();
   division6.display();
   division7.display();
   division8.display();
   division9.display();
   division10.display();
   division11.display();
  
}