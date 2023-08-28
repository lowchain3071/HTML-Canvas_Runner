const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 640;
canvas.height = 360;
window.alert("hi");

//keyboard event listeners
let keys = [];
window.addEventListener("keydown", e => {
    if(keys.includes(e.key)){
        switch(e.key){
            case " ":
                keys.push(" ");
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

//physics variables
let gravity = 10;
let collisionDIRECTIONS = [];

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
    if(keys.includes(" ")){

    }

    [...player,platforms,...obstacles,...powerups].forEach(object => {
        object.draw();
    });

    requestAnimationFrame(animate);
}
animate();

function rectCollide(a, b, directionsToCollide = []){
    /* if((
            a.x + a.width > b.x || //left
            a.x < b.x + b.width //right
        ) && (
            a.y + a.height > b.y || //top
            b.y + b.height > a.y //bottom
        )){
            return true;
        } else {
            return false;
        } */
    for (const collisionDirection of directionsToCollide) {
        let horizontalCollision = false;
        let verticalCollision = false;
        let collision = false;
        switch(collisionDirection){
            case "top":
                break;
            case "bottom":
                break;
            case "left":
                break;
            case "right":
                break;
            default:
                return false;
        }
    }
    return collision;
}