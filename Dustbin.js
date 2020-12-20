class Dustbin{
   constructor(x,y,width,height){
      var euh = {
         restitution : 1
      }

      this.body = Bodies.rectangle(x,y,width,height, euh);
      this.width = width;
      this.height = height;
      World.add(myWorld,this,body);
   }
       display() {

         var pos = this.body.position;
         rectMode(CENTER);
         rect(pos.x,pos.y,this.width,this.height);



       }
}