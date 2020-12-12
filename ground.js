class Ground{
    constructor(){
        var opt = {
            restitution:0,
            isStatic:true
        }
        this.body = Matter.Bodies.rectangle(width/2,670,width,10,opt)
        World.add(this.body)
    }
    show(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}