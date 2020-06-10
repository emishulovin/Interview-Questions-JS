// Loop through: [x [y = x : n - x - 1] : n / 2]
// This (where the inner loop starts at "x", as opposed to "0") results in a diagonal traversal of the array towards the most inner
// matrix of 4.

function rotateImage(a) {
  n = a.length;
  for (let x = 0; x < n / 2; x++) {
    for (let y = x; y < n - x - 1; y++) {
      temp = a[x][y];
      a[x][y] = a[n - y - 1][x]; // bottom-left -> top-left
      a[n - y - 1][x] = a[n - x - 1][n - y - 1]; // bottom-right -> bottom-left
      a[n - x - 1][n - y - 1] = a[y][n - x - 1]; // top-right -> bottom-right
      a[y][n - x - 1] = temp; // top-left -> top-right
    }
  }
  return a;
}

test1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

test2 = [[1]];

test3 = [
  [6, 8, 7, 6, 10],
  [8, 9, 6, 10, 9],
  [6, 7, 3, 2, 6],
  [8, 9, 8, 9, 3],
  [2, 9, 2, 7, 7],
];

console.log(rotateImage(test1));
