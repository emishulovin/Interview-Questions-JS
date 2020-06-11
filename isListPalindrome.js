// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

// to decide if palindrome, we could build a stack and traverse the list again, popping and comparing; or move three pointers, and reverse the list that way. Recursion would cause a large call stack.  Since we have O(1) of additional space, let's use reversing.
// note to self: the only time we change the linked list itself is when we invoke it's own properties (next and this).

const reverseList = (l) => {
  let prev = null; // 1st pointer
  let current = l; // 2nd pointer
  console.log("first current: ", current.value);
  while (current != null) {
    next = current.next; //3rd pointer
    current.next = prev;
    prev = current;
    current = next;
    console.log("prev: ", prev.value);
  }
  reversed = prev;
  return reversed;
};

const printList = (l) => {
  while (l) {
    console.log("print each node:", l.value);
    l = l.next;
  }
};

const listLength = (l) => {
  let n = 0;
  while (l) {
    l = l.next;
    n++;
  }
  return n;
};

const isListPalindrome = (l) => {
  if (l === null) {
    // no node provided
    console.log("was null");
    return true;
  }
  if (l.next === null) {
    // case where just one node
    return true;
  }

  reversed = reverseList(l);
  n = listLength(l);
  printList(reversed);
  i = 0;
  while (i < n / 2) {
    if (reversed.value !== l.value) {
      console.log("compare 2 values: ", reversed.value, l.value);
      return false;
    }
    reversed.value = reversed.next;
    l.value = l.next;
    i++;
  }
  return true;
};
