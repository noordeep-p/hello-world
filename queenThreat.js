let whiteQueen = [0, 0];
let blackQueen = [5, 7];

const generateBoard = function(whiteQueen, blackQueen) {
  const chessBoard = [];
  while (chessBoard.length < 8) {
    const chessRow = [];
    while (chessRow.length < 8) {
      chessRow.push(0);
    }
    chessBoard.push(chessRow);
  }
  chessBoard[whiteQueen[0]][whiteQueen[1]] = 1;
  chessBoard[blackQueen[0]][blackQueen[1]] = 1;
  return chessBoard;
};

const queenThreat = function(generateBoard) {
  const queenIndex = [];
  for (let i = 0; i < generateBoard.length; i++) {
    for (let j = 0; j < generateBoard[i].length; j++) {
      const index = [];
      if (generateBoard[i][j] === 1) {
        index.push(i, j);
        queenIndex.push(index);
      }
    }
  }
  if (queenIndex[0][0] === queenIndex[1][0]) {
    return true;
  } else if (queenIndex[0][1] === queenIndex[1][1]) {
    return true;
  } else if (queenIndex[0][1] === queenIndex[1][0]) {
    return true;
  } else if (queenIndex[0][0] === queenIndex[1][1]) {
    return true;
  } else {
    return false;
  }
};

let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));