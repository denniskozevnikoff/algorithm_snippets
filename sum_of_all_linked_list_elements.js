class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(7);

a.next = b;
b.next = c;
c.next = d;



const sumListValues = (head) => {
    if(head == null) return 0;
    sum = 0;
    while(head != null){
        sum += head.val;
        head = head.next;
    }
    
    return sum
};



console.log(sumListValues(a));
