class Block{

     constructor(x,y,width,height){

             var options={
                 restitution:0.4,
                 friction:1.0,
                 isStatic:true
             }

             this.body = Bodies.rectangle(x,y,width,height,options);
             this.width = width;
             this.height = height;
             World.add(world,this.body);
     }

     display(){

        var angle = this.body.angle;
        var pose = this.body.position;

        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        pop()
     }





























}