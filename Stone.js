class Stone{
	constructor(x,y)
	{

	var options = {
     restitution : 0.8,
	 friction : 0.9,
	 density : 12


	}
		this.x=x;
		this.y=y;
		this.body=Bodies.circle(this.x, this.y, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("white");
			fill("darkblue");
			pop()
	}

}