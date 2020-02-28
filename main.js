let squares = document.querySelector('.square');
function generateBlocks() {
  for (let i = 0; i < 25; i++) {
    let newSquare = document.createElement('div');
    newSquare.className = 'blocks';
    let rand1 = Math.floor(Math.random() * 256);
    let rand2 = Math.floor(Math.random() * 256);
    let rand3 = Math.floor(Math.random() * 256);
    newSquare.style.width = '50px';
    newSquare.style.height = '50px';
    newSquare.style.background = `rgb(${rand1},${rand2},${rand3})`;
    squares.append(newSquare);
  }
}

function removeBlocks() {
  let allBlocks = document.querySelectorAll('.blocks');
  for (let i = 0; i < allBlocks.length; i++) {
    allBlocks[i].remove();
  }
}
function generateBlocksInterval() {
  generateBlocks();
  let interval = setInterval(() => {
    removeBlocks();
    generateBlocks();
  }, 1000);
  return interval;
}
generateBlocksInterval();
