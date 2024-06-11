const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");
const startScreen = document.querySelector(".start-screen");
const checkpointScreen = document.querySelector(".checkpoint-screen");

const checkpointMessage = document.querySelector(".checkpoint-screen > p"); // which is used to target the paragraph inside checkpoint screen class
// then before we begin build out the functionality first we have to create 2d grpahics using canva
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
// at this time innerWidth is the width of the browser window;
canvas.height = innerHeight;
// at this time innerHeight is the Height of the browser window;
//When the player jumps, you will need to apply gravity to bring them back down.
const gravity = 0.5;
/**
 * As you are designing the game, you will need to make sure that the size of the elements in the game are responsive and adapt to different screen sizes.
 * Start by creating an arrow function called proportionalSize that takes in a size parameter.
 */
/**
 * The width and the height of the main player, platforms and checkpoints will be proportional sized relative to the innerHeight of the browser screen. The goal is to make the game responsive and visually consistent across different screen sizes.

Inside your proportionalSize function, you will need to return a ternary that checks if innerHeight is less than 500. If so, return Math.ceil((size / 500) * innerHeight), otherwise return size.
 * @param {*} size 
 */

const proportionalSize = (size) => {
  return innerHeight < 500 ? Math.ceil((size / 500) * innerHeight) : size;
};

class Player {
  constructor() {
    this.position = {
      x: proportionalSize(10),
      y: proportionalSize(400),
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = proportionalSize(40);
    this.height = proportionalSize(40);
  }

  draw() {
    ctx.fillStyle = "#99c9ff";
    //you need to create the player's shape by calling the fillRect() method on the ctx object which you instantiated earlier.
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      if (this.position.y < 0) {
        this.position.y = 0;
        this.velocity.y = gravity;
      }
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }

    if (this.position.x < this.width) {
      this.position.x = this.width;
    }

    if (this.position.x >= canvas.width - 2 * this.width) {
      this.position.x = canvas.width - 2 * this.width;
    }
  }
}

const player = new Player();

const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    if(keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
        player.velocity.x = 5;
    }
  }

  const keys = {
    rightKey: {
      pressed: false
    },
    leftKey: {
      pressed: false
    }
  };
const startGame = () => {
    canvas.style.display = "block";
    startScreen.style.display = "none";
    player.draw();
};

startBtn.addEventListener("click", startGame);



