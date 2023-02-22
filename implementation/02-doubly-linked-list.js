// Node class is implemented for you, no need to look for bugs here!
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
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }
        this.length++;
        // Write your hypothesis on the time complexity of this method here
        // Time Complexity O(1)
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this
        // Write your hypothesis on the time complexity of this method here
        // Time Complexity O(n)
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) {
            return;
        }
        this.length--;

        const removed = this.head.value;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
            return removed;
        }
        this.head = this.head.next;
        this.head.prev = null;

        return removed;
        // Time Complexity: O(1)
        // Write your hypothesis on the time complexity of this method here
        //
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.tail) {
            return
        }

        this.length--;

        const removed = this.tail.value;

        if (!this.length) {
            this.head = null;
            this.tail = null;
            return removed;
        }

        this.tail = this.tail.prev;
        this.tail.next = null;

        return removed;
        // Time Complexity: O(1)
    }

    peekAtHead() {
        // Return value of head node
        return this.head ? this.head.value : undefined;
        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(1)
    }

    peekAtTail() {
        // Return value of tail node
        return this.tail ? this.tail.value : undefined;
        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
