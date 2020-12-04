class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    var position = [this.body.position.x, this.body.position.y];
    this.trajectory.push(position);

    // loop over items inside trajectory array
    for(var i = 0; i < this.trajectory.length; i++){
      //i= 0; initialiation
      // i< ; exit condition
      // i++ increase by one everytime
      
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
