class Spieler extends Gameobjekt
{
   constructor(x,y,width,height,sprite,liste)
   {
           super(x,y,width,height,sprite)
           this.liste=liste
   }
         zähler1 = 0;
       
           zähler2 =0;
      

      update(){


           
               if(this.zähler2==0)
                { this.zähler2=8;
                    this.icon = this.liste[this.zähler1];
                    this.zähler1++;
                }
             
               if(this.zähler1==13)
                {
                   this.zähler1=0;
                }
                this.zähler2--;
        } 
            
        
    
}
