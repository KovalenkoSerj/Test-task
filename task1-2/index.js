function parser(str) {
  return Math.trunc(+str);
}

function spiralMatrix(col, row) {
  const matrix = [];
  let matrixRowValue = 1,
    currentRow = 0,
    currentCol = 0,
    lastRow = row - 1,
    lastCol = col - 1;

  for (let i = 0; i < col; i++) {
    matrix[i] = [];
    for (let j = 0; j < row; j++) {
      matrix[i][j] = matrixRowValue;
      matrixRowValue++;
    }
  }

  return dataCollection(matrix, currentRow, currentCol, lastRow, lastCol);
}

function dataCollection(matrix, currentRow, currentCol, lastRow, lastCol, arr) {
  const result = arr || [];

  if (currentRow <= lastRow && currentCol <= lastCol) {
    for (let i = currentCol; i <= lastCol; i++) {
      result.push(matrix[currentRow][i]);
    }
    currentRow++;

    for (let i = currentRow; i <= lastRow; i++) {
      result.push(matrix[i][lastCol]);
    }
    lastCol--;

    if (currentRow <= lastRow) {
      for (let i = lastCol; i >= currentCol; i--) {
        result.push(matrix[lastRow][i]);
      }
      lastRow--;
    }

    if (currentCol <= lastCol) {
      for (let i = lastRow; i >= currentRow; i--) {
        result.push(matrix[i][currentCol]);
      }
      currentCol++;
    }
    return dataCollection(
      matrix,
      currentRow,
      currentCol,
      lastRow,
      lastCol,
      result
    );
  }

  return result;
}

console.log(spiralMatrix(4, 4));
