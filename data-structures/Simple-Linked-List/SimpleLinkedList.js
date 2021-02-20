/*
A linked list is a sequence of data structures which are connected together via links or
pointers.Data is stored in a node which also contains the pointer to the next link.

A linked list is dynamic meaning it can allocate and deallocate memory at runtime making it more
efficient than Arrays or ArrayLists.You also do not need to declare an initial size which is
good for situations where you need to dynamically change the size without wasting memory space.
*/

// Node class
class Node {
    /*
    Initializes a new Node for the LinkedList object
    @param - data - the value the node will hold
    */
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Simple linked list class
class LinkedList {
    /*
    Initializes a new Node for the LinkedList object
    */
    constructor() {
        this.head = null;
    }

    /*
    Pushes a new Node to the front of this list to replace the head
    @param - data - the value the node will hold
    */
    push(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    /*
    Appends a new Node to the end of this list
    @param - data - the value the node will hold
    */
    append(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            return;
        }

        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }

        temp.next = newNode;
    }

    /*
    Inserts a new node at the given index
    @param - index - the index at which the node is to be placed
    @param - data - the value the node will hold
    @throws - Exception - If negative index is given
    @throws - Exception - If the index is out of bounds
    */
    insertAtIndex(index, data) {
        if (index < 0) {
            throw "Negative index is not allowed";
        }
        if (index == 0) {
            this.push(data);
            return;
        }

        let i = 0;
        let temp = this.head;
        while (i < (index - 1) && temp != null) {
            temp = temp.next;
            i++;
        }

        if (temp == null) {
            throw "Index is out of bounds";
        }

        let newNode = new Node(data);
        newNode.next = temp.next;
        temp.next = newNode;
    }

    /*
    Inserts a new Node after a given node
    @param - node - the value of the node the new node is to be inserted after
    @param - data - the value the node will hold
    @throws - Exception - If the list is empty
    @throws - Exception - If item does not occur in this list
    */
    insertAfter(node, data) {
        if (this.head == null) {
            throw "List is empty"
        }

        let temp = this.head;
        while (temp != null) {
            if (temp.data == node) {
                break;
            }
            temp = temp.next;
        }

        if (temp == null) {
            throw "Item does not occur in the list"
        }

        let newNode = new Node(data);
        newNode.next = temp.next;
        temp.next = newNode;
    }

    /*
    Inserts a new Node before a given node
    @param - node - the value of the node the new node is to be inserted before
    @param - data - the value the node will hold
    @throws - Exception - If the list is empty
    @throws - Exception - If item does not occur in this list
    */
    insertBefore(node, data) {
        if (this.head == null) {
            throw "List is empty"
        }
        if (this.head.data == node) {
            this.push(data);
            return;
        }

        let temp = this.head;
        while (temp.next != null) {
            if (temp.next.data == node) {
                break;
            }
            temp = temp.next;
        }
        if (temp.next == null) {
            throw "Item does not occur in the list"
        }

        let newNode = new Node(data);
        newNode.next = temp.next;
        temp.next = newNode;
    }

    /*
    Counts how many nodes are in the list
    @return - the number of items in the list
    */
    size() {
        let temp = this.head;
        let count = 0;

        while (temp != null) {
            count++;
            temp = temp.next;
        }

        return count;
    }

    /*
    Deletes the Node at the head of the list
    @throws - Exception - If the list is empty
    */
    deleteFirst() {
        if (this.head == null) {
            throw "List is empty"
        }

        this.head = this.head.next;
    }

    /*
    Deletes the Node at the tail of the list
    @throws - Exception - If the list is empty
    */
    deleteLast() {
        if (this.head == null) {
            throw "List is empty"
        }

        let temp = this.head;
        while (temp.next.next != null) {
            temp = temp.next;
        }

        temp.next = null;
    }

    /*
    Deletes a node given by it's value
    @param - node - the value of the node to be deleted
    @throws - Exception - If the list is empty
    @throws - Exception - If item does not occur in this list
    */
    deleteNode(node) {
        if (this.head == null) {
            throw "List is empty"
        }
        if (this.head.data == node) {
            this.head = this.head.next;
            return;
        }

        let temp = this.head;
        while (temp.next != null) {
            if (temp.next.data == node) {
                break;
            }
            temp = temp.next;
        }
        if (temp.next == null) {
            throw "Item does not occur in the list";
        }
        temp.next = temp.next.next;
    }

    /*
    Deletes a node given by it's index
    @param - index - the index of the node to be deleted
    @throws - Exception - If the index is negative
    @throws - Exception - If the list is empty
    @throws - Exception - If the index is out of bounds
    */
    deleteAtIndex(index) {
        if (index < 0) {
            throw "Negative index is not allowed";
        }
        if (this.head == null) {
            throw "List is empty"
        }
        if (index == 0) {
            this.head = this.head.next;
            return;
        }

        let i = 0;
        let temp = this.head;
        while (i < (index - 1) && temp != null) {
            temp = temp.next;
            i++;
        }
        if (temp == null || temp.next == null) {
            throw "Index is out of bounds";
        }

        let next = temp.next.next
        temp.next = next;
    }

    /*
    Returns the value at the head of the list
    @throws - Exception - If the list is empty
    @return - the value of the head node
    */
    peekFirst() {
        if (this.head == null) {
            throw "List is empty";
        }
        return this.head.data;
    }

    /*
    Returns the value at the tail of the list
    @throws - Exception - If the list is empty
    @return - the value of the tail node
    */
    peekLast() {
        if (this.head == null) {
            throw "List is empty";
        }

        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        return temp.data;
    }

    /*
    Returns the value at the given index
    @param - index - the index of the node to be returned
    @throws - Exception - If the index is negative
    @throws - Exception - If the list is empty
    @throws - Exception - If the index is out of bounds
    @return - the value of the node at the given index
    */
    peekAtIndex(index) {
        if (index < 0) {
            throw "Negative index is not allowed";
        }
        if (this.head == null) {
            throw "List is empty";
        }
        if (index == 0) {
            return this.head.data;
        }
        let i = 0;
        let temp = this.head;
        while (i < index && temp != null) {
            temp = temp.next;
            i++;
        }
        if (temp == null) {
            throw "Index is out of bounds";
        }
        return temp.data;
    }

    /*
    Checks if a node is present in this list
    @param - node - the value of the node to be searched for
    @throws - Exception - If the list is empty
    @return - True if the value is present otherwise False
    */
    contains(node) {
        if (this.head == null) {
            throw "List is empty";
        }
        if (this.head.data == node) {
            return true;
        }
        let temp = this.head;
        while (temp.next != null) {
            if (temp.next.data == node) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }

    /*
    Reverses the order of the list
    @throws - Exception - If the list is empty
    */
    reverseList() {
        if (this.head == null) {
            throw "List is empty";
        }

        let previous = null;
        let temp = this.head;
        while (temp != null) {
            let next = temp.next;
            temp.next = previous;
            previous = temp;
            temp = next;
        }
        this.head = previous;
    }

    /*
    Appends one last to the end of this list
    @param - list - the LinkedList to be appended
    */
    concat(list) {
        if (list.head == null) {
            return;
        }
        if (this.head == null) {
            this.head = list.head;
            return;
        }
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = list.head;
    }
    /*
    Copies the list passed in on top of this list
    @param - list - the LinkedList to be copied
    */
    copy(list) {
        this.head = list.head;
    }

    /*
    Individually displays the contents of every node in the list
    */
    displayList() {
        let temp = this.head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}