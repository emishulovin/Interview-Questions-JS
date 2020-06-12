// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

const shaveZeroes = (string) => {
  return +string;
};

const addLeadingZeroes = (num) => {
  string = String(num);
  let combined = string;
  console.log("ll value: ", string);
  for (i = 0; i < combined.length; i++)
    if (combined.length < 4) {
      combined = "0" + combined;
      console.log("combined: ", combined);
    }
  return combined;
};

const listToString = (a) => {
  // loops through list and makes individually padded strings
  let string = "";
  while (a != null) {
    string += addLeadingZeroes(a.value);
    console.log("string after adding zeros: ", string);
    a = a.next;
  }
  return string;
};

const updateLL = (sum, ll, llB) => {
  sum = String(sum);
  let counter = 0;
  let updatedLL = ll;
  let string = "";
  for (let i = 0; i < sum.length; i++) {
    while (ll.value !== null || llB.value !== null) {
      if (i % 4 === 0) {
        console.log("updatedLL: ", updatedLL.value);
        updatedLL.value = string;
        updatedLL = updatedLL.next;
        counter++;
        continue;
      }
      string += sum[i];

      console.log("string", string);
    }
  }
  // updatedLL.next = null
  return updatedLL;
};

const addTwoHugeNumbers = (a, b) => {
  string1 = listToString(a);
  string2 = listToString(b);

  sum = Number(string1) + Number(string2);

  console.log("string1 + string2 = sum: ", string1, string2, sum);

  return updateLL(sum, a, b);
};
