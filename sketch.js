function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function draw() {
  background(255,255,255);
  
  if (World.frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

    for ( var i = 0; i <= width; i = i + 80){
      divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight));
    }

    division1 = new Divisions (50,350,5,100);
    division2 = new Divisions (150,350,5,100);
    division3 = new Divisions (250,350,5,100);
    division4 = new Divisions (350,350,5,100);
    division5 = new Divisions (450,350,5,100);
    division6 = new Divisions (550,350,5,100);
    division7 = new Divisions (650,350,5,100);
    division8 = new Divisions (750,350,5,100);

    display(){
      division1.display()
      division2.display()
      division3.display()
      division4.display()
      division5.display()
      division6.display()
      division7.display()
      division8.display()
    }

  drawSprites();
}