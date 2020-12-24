class Bob{
    constructor(x,y){

        var options = {
            isStatic: false,
            restitution: 0.3,
            friction:0.5,
            density: 1.2
        }

    this.y = y
    this.x = x
    this.radius = 50
    
    this.body = Bodies.circle(this.x,this.y,50,options)
    
    World.add(world,this.body)
    }

    display(){
        var pos = this.body.position

        push()
        translate(pos.x, pos.y);
        
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius, this.radius)
        

        pop();

    }
}