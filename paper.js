class paper {
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,10,options)
        this.radius=10
        this.image=loadImage("paper.png")
        World.add(world,this.body)
    
    }
    display(){
       var pose=this.body.position
       push()
       translate(pose.x,pose.y)
       fill("yellow")
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius)
        pop()

        
    }
}