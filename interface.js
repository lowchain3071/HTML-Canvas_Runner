export class interface {
  constructor(game){
    this.game = game;
    this.keys = [];
    window.addEventListener("keydown", e => {
      this.keys.push(e.key);
    });
    window.addEventListener("keyup", e => {
      this.keys.splice(e.key);
    });
  }
}