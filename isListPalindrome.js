// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

// to decide if palindrome, we could build a stack and traverse the list again, popping and comparing; or move three pointers, and reverse the list. Recursion would cause a large call stack.  Since we have O(1) of additional space, let's use reversing.
// note to self: the only time we change the linked list itself is when we invoke it's own properties (next and this).

const reverseList = (l) => {
  let prev = null; // 1st pointer
  let current = l; // 2nd pointer
  while (current != null) {
    next = current.next; //3rd pointer
    current.next = prev;
    prev = current;
    current = next;
  }
  reversed = prev;
  return reversed;
};

const getLastNode = (l) => {
  while (l.next != null) {
    l = l.next;
  }
  return l;
};

const getPreviousNode = (l, end) => {
  while (l && l.next != end) {
    l = l.next;
  }
  return l;
};

const printList = (l) => {
  while (l.next != null) {
    console.log(l.val);
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

const isPalindrome = (l) => {
  if (l == null || l.next == null) {
    // no or one node provided
    return true;
  }
  console.log("l.value, l.next.value", l.val, l.next.val);
  if (l.next.next == null && l.val != l.next.val) {
    return false;
  }

  // reversed = reverseList(l)
  // let n = listLength(l)

  let start = l;
  let end = getLastNode(l);

  while (start != end && end.next != start) {
    if (start.val !== end.val) {
      return false;
    }
    start = start.next;
    end = getPreviousNode(l, end);
    console.log("start, end: ", start, end);
  }
  return true;
};
