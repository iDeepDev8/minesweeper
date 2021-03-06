document.addEventListener('DOMContentLoaded', startGame)

var board = {
    cells : [
      { 
        isMarked : true,
        isMine : true,
        hidden : true,
        row : 0,
        col : 0
      },
      { 
        isMarked : true,
        isMine : false,
        hidden : true,
        row : 0,
        col : 1
      },
      {
        isMarked : true,
        isMine : true,
        hidden : true,
        row : 0,
        col : 2
      },
      {
        isMarked : true,
        isMine : true,
        hidden : true,
        row : 0,
        col : 3
      },
      {
        isMarked : true,
        isMine : false,
        hidden : true,
        row : 1,
        col : 0
      },
      {
        isMarked : true,
        isMine : false,
        hidden : true,
        row : 1,
        col : 1
      },
      {
        isMarked : true,
        isMine : false,
        hidden : true,
        row : 1,
        col : 2
      },
      {
        isMarked : true,
        isMine : true,
        hidden : true,
        row : 1,
        col : 3
      },
      {
        isMarked : true,
        isMine : true,
        hidden : true,
        row : 2,
        col : 0
      },
      {
        isMarked : true,
        isMine : true,
        hidden : true,
        row : 2,
        col : 1
      },
      {
        isMarked : true,
        isMine : false,
        hidden : true,
        row : 2,
        col : 2
      },
      {
        isMarked : true,
        isMine : true,
        hidden : true,
        row : 2,
        col : 3
      },
      {
        isMarked : true,
        isMine : true,
        hidden : true,
        row : 3,
        col : 0
      },
      {
        isMarked : true,
        isMine : false,
        hidden : true,
        row : 3,
        col : 1
      }, 
      {
        isMarked : true,
        isMine : true,
        hidden : true,
        row : 3,
        col : 2
      },
      {
        isMarked : true,
        isMine : false,
        hidden : true,      
        row : 3,
        col : 3
      }
    ]
  }

function startGame () {
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);

  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  };
  // Don't remove this function call: it makes the game work!
  lib.initBoard();
};

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var victory = 0;

  for (var i = 0; i < board.cells.length; i++) {
    
    if (board.cells[i].isMine) {

      if (board.cells[i].isMarked) {
        victory++;
      }

    } else if (board.cells[i].isMine === false) {
      if (board.cells[i].hidden === false) {
        victory++;
      }
    };
  }
// You can use this function call to declare a winner (once you've
// detected that they've won, that is!)
//   lib.displayMessage('You win!')
  if (victory === board.cells.length) {
    lib.displayMessage('Got them all' + ' !!!');
    return;
    };
};

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);

  var mineCount = 0;

  for (var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine) {
      mineCount++;
    }; 
  };

  return mineCount;
};


