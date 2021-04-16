class Tree{
  constructor(x,y){
	this.x = x;
	this.y = y;
	this.treew = 450;
	this.treeh = 600;
	this.treethickness = 10;
	this.image = loadImage("tree.png")
	this.bottom = Bodies.rectangle(this.x,this.y,this.treew,this.treethickness,{isStatic:true});
	this.leftwall = Bodies.rectangle(0,this.y-this.treeh/2,this.treethickness,this.treeh,{isStatic:false});
	this.rightwall = Bodies.rectangle(this.x+this.treew/2,this.y-this.treeh/2,this.treethickness,this.treeh,{isStatic:false})
	
	World.add(world,this.rightwall);
	World.add(world,this.bottom);
	World.add(world,this.leftwall);
  }
  display(){
	var pos = this.bottom.position;
 	push()
	translate(pos.x,pos.y);
	fill(255)
	imageMode(CENTER);
	image(this.image,0,0 ,this.treew,this.treeh)
	pop()
			
  }
}