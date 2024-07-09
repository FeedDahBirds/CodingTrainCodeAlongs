//This was fun - getting a feel for the library and drawing.
function setup() {
    //function that creates the canvas (draw area);
    //takes in width, height
    createCanvas(400, 300, WEBGL);
  }
  
  function draw() {
    if(frameCount % 10 === 0) {
      background(getRandomInt(200),getRandomInt(300),getRandomInt(400));    
    }
    rotateY(frameCount * .01);
    rect(getRandomInt(-100), getRandomInt(-100), getRandomInt(200), getRandomInt(50));
    
  }
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }