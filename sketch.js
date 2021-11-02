let Imgbackground;
let list = [];
let steine=[];
let steinen=[];
let boden;


function preload(){
  
  Imgbackground=loadImage('Images/background.jpg')
  boden=loadImage('Images/boden2.png')
  for(let i = 1; i<=14; i++)
  {
    let filename ='Images/tile' + i + '.png';
     let file = loadImage(filename);
     list.push(file);
  }
  for(let i = 1; i<=3; i++)
  {
    let filenam ='Images/stein' + i + '.png';
     let fil = loadImage(filenam);
     steinen.push(fil);
  }
  
 

}

function setup() {
  
  let canvas = createCanvas(800,500)
  canvas.position(window.innerWidth/2-400,90)
  

  
  back = new Background(0,0,width,height,Imgbackground,2)
  back2 = new Background(800,0,width,height,Imgbackground,2)
  player = new Spieler(width/2-list[0].width*1.2+60,454-list[0].height*1.2,list[0].width*1.2,list[0].height*1.2,list[0],list)
  
}


 let boolean = false;
 let gameover = false;
 let zähler1=0;
 let counter = 0;
 let jump = false;
 let scorecounter = 0;
 let tick = 3000;
 let zähl = 0;
 let zähl2 = 180;
 let index = 0;

function draw() {
  
  if(gameover)
  {
    
    back2.show()
    back.show()
    player.show()
    image(boden,0,450,width,boden.height)
    for(let i = 0; i<steine.length; i++)
  {
    steine[i].show()
  }
      
  textSize(60);
  fill(200,50,20);
  text('Game Over!',width/2-100,height/2-100);

  textSize(30);
  fill(85,85,85);
  text('Score: '+counter,width/2-100,height/2-50);

  textSize(30);
  fill(85,85,85);
  text(counter,730,30)
  }
  else
  {
     index = Math.floor(Math.random() * 3)
    if(scorecounter<40)
    {
      counter++;
      scorecounter=0;
    }
    scorecounter++;
    if(zähl==zähl2)
    {
      zähl = 0
      boolean = true;
    }
    zähl++;
   if(boolean)
   {
     boolean = false;
      
       
     steine.push(new Gameobjekt(800,452-steinen[index].height,steinen[index].width,steinen[index].height,steinen[index]))
      
     if(zähl2>20)
     {
     zähl2 -= 5;
     }

   }
  background(0)
  
  back2.show()
  back.show()
  player.show()
  image(boden,0,450,width,boden.height)
  textSize(30);
  fill(85,85,85);
  text(counter,730,30)
  let bool = true;
  
  for(let i = 0; i<steine.length; i++)
  {
    steine[i].show()
    if(player.checkCollision(steine[i]))
    {
       gameover = true
     
    }
    else{
      steine[i].x-=5;
    }


    if(steine[i].x<-steine[i].width)
    {
          steine.splice(i,1)
    }
    
   
    
  }
  
 
 if(jump)
 {
   player.icon=list[3]
  if(zähler1<=14)
  {
    player.y=player.y/1.05;
    zähler1++;
  }
  else if(zähler1<=21)
  {
    zähler1++;
  }
  else if(zähler1>21&&zähler1<=36){
    player.y=player.y*1.05;
    zähler1++;
  }
  else{
    jump = false
    zähler1=0;
  }
 }
 else{
  player.update();
 }
  
  

  
 

  back.update(bool);
  back2.update(bool);
 
 }
}
function keyReleased(){
     
    if(gameover==false)
  {
       if(keyCode==32)
      {
         jump=true
      }
    
  }
  else{
       if(keyCode==13)
        {
          zähl2 = 180;
                  boolean=false;
             for(let i = 0; i<steine.length; i++)
            {
             steine.splice(i,1)
       
            }
            
              counter =0;
             gameover=false;
            
        }
   
      }
 return false;


}

