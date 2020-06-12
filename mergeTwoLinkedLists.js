// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
// these have to be sorted wuith each other.
const mergeTwoLinkedLists = (l1, l2) => {
  let head = new ListNode(null, null);
  let l3 = head;

  while (l1 !== null || l2 !== null) {
    if (l1 === null) {
      l3.next = l2;
      break;
    }

    if (l2 === null) {
      l3.next = l1;
      break;
    }

    if (l1.value <= l2.value) {
      l3.next = l1;
      l1 = l1.next;
      l3 = l3.next;
      continue;
    }

    if (l1.value >= l2.value) {
      l3.next = l2;
      l2 = l2.next;
      l3 = l3.next;
      continue;
    }
  }
  return head.next;
};
