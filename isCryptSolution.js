const isCryptSolution = (crypt, solution) => {
  //Rules: leading zeros returns false, !arithmetic_solution returns false
  //I will use a hashmap for fast lookup O(1)
  dict = createDict(solution);
  var [num1, num2, sum] = buildNums(crypt, dict);

  // If the num begins with a zero and it has more than one digit:
  if (
    (num1[0] === "0" && num1[1]) ||
    (num2[0] === "0" && num2[1]) ||
    (sum[0] === "0" && sum[1])
  ) {
    return false;
  }
  if (Number(num1) + Number(num2) != Number(sum)) {
    return false;
  }
  return true;
};

const createDict = (solution) => {
  let dict = {};
  for (i = 0; i < solution.length; i++) {
    dict[solution[i][0]] = solution[i][1];
  }
  return dict;
};

const buildNums = (crypt, dict) => {
  let num1 = "";
  let num2 = "";
  let sum = "";
  for (let i = 0; i < crypt.length; i++) {
    for (let j = 0; j < crypt[i].length; j++) {
      switch (i) {
        case 2:
          sum += dict[crypt[i][j]];
          break;
        case 1:
          num2 += dict[crypt[i][j]];
          break;
        case 0:
          num1 += dict[crypt[i][j]];
          break;
      }
      console.log("string: num1, num2, sum: ", num1, num2, sum);
    }
  }
  return [num1, num2, sum];
};

crypt1 = ["SEND", "MORE", "MONEY"];
solution1 = [
  ["O", "0"],
  ["M", "1"],
  ["Y", "2"],
  ["E", "5"],
  ["N", "6"],
  ["D", "7"],
  ["R", "8"],
  ["S", "9"],
];

crypt2 = ["TEN", "TWO", "ONE"];
solution2 = [
  ["O", "1"],
  ["T", "0"],
  ["W", "9"],
  ["E", "5"],
  ["N", "4"],
];

console.log(isCryptSolution(crypt1, solution1) === true);
console.log(isCryptSolution(crypt2, solution2) === false);
