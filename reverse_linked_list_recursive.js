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


// null <-  a  <-  b ->    c
//                 prev    cur     next

const reverse = (head, prev = null) => {
    if(head == null) return prev;
    const next = head.next;
    head.next = prev;
    return reverse(next, head);
    

};



console.log(reverse(a));
