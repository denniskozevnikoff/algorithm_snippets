class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
// const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
// d.next = e;

const valueatList = (head, index) => {
    if(head == null) return null;
    if(index == 0) return head.val;
    let current = head;
    let count = 0;
    while(current != null){
        if(count == index) return current.val;
        current = current.next;
        count++;
    }
    return 0;
};


console.log(valueatList(a, 2));
