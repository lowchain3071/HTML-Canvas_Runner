//objects category
export class player {
  constructor(game){
    this.x = this.game.canvas.width/2;
    this.y = this.game.canvas.height/2;
    this.width = 50;
    this.height = 50;
    this.ctx = this.game.canvas.getContext("2d");
    this.health = 100;
    this.energy = 100;
    this.maxJumps = 2;
    this.jumpsLeft = 2;
    this.onPlatform = true;
  }
  update(){
    
  }
  draw(){
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
export class platform {
  constructor(game){
    this.game = game;
    this.canvas = this.game.canvas;
    this.ctx = this.game.ctx;
    this.x = this.canvas.width;
    this.y = Math.random()/this.game.canvas.height;
    this.width = Math.random() * 175 + 60;
    this.height = Math.random() * 20 + 50;
  }
  update(){
    if((
        //horizontal
        this.x > this.game.player.x + this.game.player.x ||
        
      ) &&
      (
        //vertical
        this.y > this.game.player.x + this.game.player.height
      )
    ){
      this.game.player.onPlatform = true;
    }else{
      this.game.player.onPlatform = false;
    }
  }
  draw(){
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}