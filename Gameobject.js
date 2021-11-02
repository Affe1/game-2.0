class Gameobjekt{


    constructor(x,y,width,height,sprite,speed)
    {
        this.x = x
        this.y= y
        this.width=width
        this.height=height
        this.icon = sprite
        this.speed = speed
    }

    show()
    {
        image(this.icon, this.x, this.y, this.width, this.height)
    }
    checkCollision(object){
        return this.x -30+ this.width > object.x && this.x < object.x + object.width && this.y + this.height > object.y && this.y < object.y + object.height    
      }
    
}