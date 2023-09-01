// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:
// function diagonalDifference(arr) {
//     let n = arr.length;
//     let leftSum = 0;
//     let rightSum = 0;
  
//     for (let i = 0; i < n; i++) {
//       leftSum += arr[i][i];  // Sum of                                                          elements on the left-to-right diagonal
//       rightSum += arr[i][n - i - 1];  // Sum of elements on the right-to-left diagonal
//     }
  
//     return Math.abs(leftSum - rightSum);
//   }
  
//   // Example usage
//   let matrix = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
//   let result = diagonalDifference(matrix);
//   console.log(result);
  