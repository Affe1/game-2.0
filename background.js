class Background extends Gameobjekt
{
  


    update(vor)
    {  
        if(vor)
        { 
            if(this.x==-800)
            {
                this.x=800;
            }
            this.x-=this.speed;
        }
        else{
            if(this.x==800)
            {
                this.x=-800;
            }
            this.x+=this.speed;
        }
    }
}