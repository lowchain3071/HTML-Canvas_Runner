import { Game } from "./main.js"
let game = new Game();
function animate(){
  requestAnimationFrame(animate);
} 