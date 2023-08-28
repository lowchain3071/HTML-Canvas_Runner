const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 640;
canvas.height = 360;

//keyboard event listeners
let keys = [];
window.addEventListener("keydown", e => {
    if(!keys.includes(e.key)){
        switch(e.key){
            case " ":
                keys.push(" ");
                break;
            case "Shift":
                keys.push("Shift");
                break;
            default:
                break;
        }
    }
});
window.addEventListener("keyup", e => {
    if(keys.includes(e.key)){
        keys.splice(e.key);
    }
});

class Object {
    constructor(ctx, x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw(ctx){
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Player extends Object{
    constructor(ctx, x, y, width, height){
        super();
    }
    draw(ctx){
        super.draw(ctx);
    }
}
let player = new Player(ctx, canvas.width/2, canvas.height/2, 50, 50);

let platforms = [];
class Platform extends Object {
    constructor(ctx, x, y, width, height){
        super();
    }
    draw(ctx){
        ctx.save();
        ctx.fillStyle = "blue";
        super.draw();
        ctx.restore();
    }
}

let obstacles = [];
class Obstacle extends Object {
    constructor(ctx, x, y, width, height){
        super();
    }
    draw(ctx){
        ctx.save();
        ctx.fillStyle = "red";
        super.draw();
        ctx.restore();
    }
}

let powerups = [];
class Powerup extends Object {
    constructor(ctx, x, y, width, height){
        super();
    }
    draw(ctx){
        ctx.save();
        ctx.fillStyle = "green";
        super.draw();
        ctx.restore();
    }
}

function animate(){
    ctx.fillRect(0,0,50,50);
    if(keys.includes(" ")){

    }

    [...player...platforms...obstacles...powerups].forEach(object => {
        object.draw();
    });

    requestAnimationFrame(animate);
}
animate();

function rectCollide(a, b, directionsToCollide = ["top", "bottom", "left", "right"]){
    let collision = false;
    for (const collisionDirection of directionsToCollide) {
        let collisionsArray = [];
        switch(collisionDirection){
            case "top":
                if((a.x+a.height>b.y)&&(a.x+a.width>b.x||a.x<b.x+b.width)){
                    collisionsArray.push("top");
                }
                break;
            case "bottom":
                if((b.y+b.height>a.y)&&(a.x+a.width>b.x||a.x<b.x+b.width)){
                    collisionsArray.push("bottom");
                }
                break;
            case "left":
                if((a.x+a.width>b.x)&&(a.y+a.height>b.y||b.y+b.height>a.y)){
                    collisionsArray.push("left");
                }
                break;
            case "right":
                if((a.x<b.x+b.width)&&(a.y+a.height>b.y||b.y+b.height>a.y)){
                    collisionsArray.push("right");
                }
                break;
            default:
                return false;
        }
    }
    /*
    index 1 - top
    index 2 - bottom
    index 3 - left
    index 4 - right
    */
    return collisionsArray;
}