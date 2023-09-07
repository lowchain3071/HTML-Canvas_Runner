const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 640;
canvas.height = 360;

//event listeners
let keys = [];
window.addEventListener("keydown", e => {
  if(!keys.includes(e.key)){
    keys.push(e.key);
  }
});
window.addEventListener("keyup", e => {
  if(keys.includes(e.key)){
    keys.splice(e.key);
  }
});

//object json
let xhr = new XMLHttpRequest();
let objects = {};

//xhr request
xhr.open("GET", "objects.json", true);
xhr.responseType = "text";

//xhr onload event
xhr.onload = event => {
  if(xhr.status = 200){
    JSON.parse(xhr.responseText);
  }
} 
xhr.send(); //send xhr request

function animate(){
  requestAnimationFrame(animate);
}