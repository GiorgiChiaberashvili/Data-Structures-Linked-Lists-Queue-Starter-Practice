// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list

        // Implement in O(n) and in O(1) time complexity

        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        // Write your hypothesis on the time complexity of this method here

        let sum = 0;
        let current = this.head;
        while (current !== null) {
            sum += current.value
            current = current.next
        }
        return sum;
    }

    averageValue() {
        // Returns the average value of all the nodes

        // Write your hypothesis on the time complexity of this method here

        let sum = 0;
        let count = 0;
        let current = this.head;
        while (current !== null) {
            sum += current.value;
            count++;
            current = current.next;
        }
        return count > 0 ? sum / count : 0;
    }



    findNthNode(n) {
        // Returns the node at the nth index from the head

        // Write your hypothesis on the time complexity of this method here

        let current = this.head;
        let count = 0;
        while (current !== null) {
            if (count === n) {
                return current;
            }
            count++;
            current = current.next;
        }
        return null;
    }

    findMid() {
        // Returns the middle node

        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
        const mid =
            Math.floor(this.length / 2) === this.length / 2
                ? this.length / 2 - 1
                : Math.floor(this.length / 2);
        let current = this.head;
        for (let i = 0; i < mid; i++) {
            current = current.next;
        }
        return current;
    }

    reverse() {
        // Returns a new reversed version of the linked list

        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        const list = new SinglyLinkedList();
        for (let i = arr.length - 1; i >= 0; i--) {
            list.addToTail(arr[i]);
        }
        return list;
        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(n)
    }




    reverseInPlace() {
        // Reverses the linked list in-place
        let last = this.head;
        while (last.next) {
            last = last.next;
        }
        for (let i = 0; i < this.length; i++) {
            let final = last.next;
            last.next = new SinglyLinkedNode(this.head.value);
            last.next.next = final;
            this.head = this.head.next;
        }
        return this.head;

        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(n)
    }

}


class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?
        const mid =
            Math.floor(this.length / 2) === this.length / 2
                ? this.length / 2 - 1
                : Math.floor(this.length / 2);
        let current = this.head;
        for (let i = 0; i < mid; i++) {
            current = current.next;
        }
        return current;
        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(n)

    }

    reverse() {
        // Returns a new reversed version of the linked list
        let current = this.tail;
        let ll = new DoublyLinkedList();
        while (current) {
            ll.addToTail(current.value);
            current = current.prev;
        }
        return ll;
        // Time Complexity: O(n)
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let last = this.tail;
        for (let i = 0; i < this.length; i++) {
            let final = last.next;
            last.next = new SinglyLinkedNode(this.head.value);
            last.next.next = final;
            this.head = this.head.next;
        }
        return this.head;
        // Time Complexity: O(n)
    }
    // Write your hypothesis on the time complexity of this method here
}


module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
