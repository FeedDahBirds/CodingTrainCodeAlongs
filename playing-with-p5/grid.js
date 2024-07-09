let squares = [];
let squareSize = 100;
let height = 1000;
let width = 1000;
function setup() {
  createCanvas(height, width);
  let numberOfSquares = width / squareSize;
  
  for(let i = 0; i < numberOfSquares; i++){
    for(let j = 0; j < numberOfSquares; j++) {
      squares.push({
        x: i * squareSize,
        y: j * squareSize
      });
    }
  }
}

function draw() {
  background(400);
  for(let i = 0; i < squares.length; i++) {
    let {x,y} = {...squares[i]};
    if(x + squareSize > mouseX && x < mouseX && y + squareSize > mouseY && mouseY > y ){
      fill(200);
    } else {
      noFill(400);
    }
    
    rect(x,y,squareSize,squareSize); 
  }
}