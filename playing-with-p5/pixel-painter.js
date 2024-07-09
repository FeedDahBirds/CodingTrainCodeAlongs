let squares = [];
let squareSize = 100;
let height = 1000;
let width = 1000;

let colors = ['red', 'blue', 'yellow', 'white', 'black', 'orange'];
let selectedColor = 'red';

let getColor = () => {
  let colorIndex = colors.indexOf(selectedColor);
  if(colorIndex == colors.length - 1) {
    colorIndex = 0;
  } else {
    colorIndex += 1;
  }
  selectedColor = colors[colorIndex];
}

let click = (sqaure, c) => {
  square.color = c;
}


function setup() {
  let cnv = createCanvas(height, width);
  let numberOfSquares = width / squareSize;
    
  cnv.mouseWheel(getColor);
  for(let i = 0; i < numberOfSquares; i++){
    for(let j = 0; j < numberOfSquares; j++) {
      squares.push({
        x: i * squareSize,
        y: j * squareSize,
        color: 'white'
      });
    }
  }
}


function draw() {
  background(400);
  for(let i = 0; i < squares.length; i++) {
    let {x,y, color} = {...squares[i]};
    if(x + squareSize > mouseX && x < mouseX && y + squareSize > mouseY && mouseY > y ){
      fill(selectedColor);
      if(mouseIsPressed) {
        squares[i].color = selectedColor;
      }
    } else {
      fill(color);
    }
    
    rect(x,y,squareSize,squareSize); 
  }
}