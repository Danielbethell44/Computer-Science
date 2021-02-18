'''
A linked list is a sequence of data structures which are connected together via links or 
pointers. Data is stored in a node which also contains the pointer to the next link.

A linked list is dynamic meaning it can allocate and deallocate memory at runtime making it more
efficient than Arrays or ArrayLists. You also do not need to declare an initial size which is
good for situations where you need to dynamically change the size without wasting memory space.
'''

# Node class
class Node:
    '''
    Initializes a new Node for the LinkedList object
    @param - data - the value the node will hold
    '''
    def __init__(self, data):
        self.data = data
        self.next = None

# Simple linked list class
class LinkedList:
    '''
    Initializes a new Node for the LinkedList object
    '''
    def __init__(self):
        self.head = None

    '''
    Pushes a new Node to the front of this list to replace the head
    @param - data - the value the node will hold
    '''
    def push(self, data):
        new = Node(data)
        new.next = self.head
        self.head = new

    '''
    Appends a new Node to the end of this list
    @param - data - the value the node will hold
    '''
    def append(self, data):
        new = Node(data)
        if self.head is None:
            self.head = new
            return

        temp = self.head
        while temp.next:
            temp = temp.next
        
        temp.next = new

    '''
    Inserts a new node at the given index
    @param - index - the index at which the node is to be placed
    @param - data - the value the node will hold
    @throws - Exception - If negative index is given
    @throws - Exception - If the index is out of bounds
    '''
    def insertAtIndex(self, index, data):
        if index < 0:
            raise Exception("Negative index is not allowed")

        if index == 0:
            self.push(data)
            return

        i = 0
        temp = self.head
        while i < (index - 1) and temp is not None:
            temp = temp.next
            i += 1

        if temp is None:
            raise Exception("Index is out of bounds")
        
        new = Node(data)
        new.next = temp.next
        temp.next = new

    '''
    Inserts a new Node after a given node
    @param - node - the value of the node the new node is to be inserted after
    @param - data - the value the node will hold
    @throws - Exception - If the list is empty
    @throws - Exception - If item does not occur in this list 
    '''
    def insertAfter(self, node, data):
        if self.head is None:
            raise Exception("List is empty")
        temp = self.head
        while temp is not None:
            if temp.data == node:
                break
            temp = temp.next

        if temp is None:
            raise Exception("Item does not occur in the list")

        new = Node(data)
        new.next = temp.next
        temp.next = new

    '''
    Inserts a new Node before a given node
    @param - node - the value of the node the new node is to be inserted before
    @param - data - the value the node will hold
    @throws - Exception - If the list is empty
    @throws - Exception - If item does not occur in this list 
    '''
    def insertBefore(self, node, data):
        if self.head is None:
            raise Exception("List is empty")

        if self.head.data == node:
            new = Node(data)
            new.next = self.head
            self.head = new
            return
        
        temp = self.head
        while temp.next is not None:
            if temp.next.data == node:
                break
            temp = temp.next
        
        if temp.next is None:
            raise Exception("Item does not occur in the list")

        new = Node(data)
        new.next = temp.next
        temp.next = new

    '''
    Counts how many nodes are in the list
    @return - the number of items in the list
    '''
    def size(self):
        temp = self.head
        count = 0

        while temp is not None:
            count += 1
            temp = temp.next

        return count

    '''
    Deletes the Node at the head of the list
    @throws - Exception - If the list is empty
    '''
    def deleteFirst(self):
        if self.head is None:
            raise Exception("List is empty")

        self.head = self.head.next


    '''
    Deletes the Node at the tail of the list
    @throws - Exception - If the list is empty
    '''
    def deleteLast(self):
        if self.head is None:
            raise Exception("List is empty")

        temp = self.head
        while temp.next.next is not None:
            temp = temp.next
        
        temp.next = None

    '''
    Deletes a node given by it's value
    @param - node - the value of the node to be deleted
    @throws - Exception - If the list is empty
    @throws - Exception - If item does not occur in this list 
    '''
    def deleteNode(self, node):
        if self.head is None:
            raise Exception("List is empty")

        if self.head.data == node:
            self.head = self.head.next
            return
        
        temp = self.head
        while temp.next is not None:
            if temp.next.data == node:
                break
            temp = temp.next
        
        if temp.next is None:
            raise Exception("Item does not occur in the list")

        temp.next = temp.next.next

    '''
    Deletes a node given by it's index
    @param - index - the index of the node to be deleted
    @throws - Exception - If the index is negative
    @throws - Exception - If the list is empty
    @throws - Exception - If the index is out of bounds
    '''
    def deleteAtIndex(self, index):
        if index < 0:
            raise Exception("Negative index is not allowed")

        if self.head is None:
            raise Exception("List is empty")

        if index == 0:
            self.head = self.head.next
            return

        i = 0
        temp = self.head
        while i < (index - 1) and temp is not None:
            temp = temp.next
            i += 1
        
        if temp is None or temp.next is None:
            raise Exception("Index is out of bounds")
        
        next = temp.next.next
        temp.next = None
        temp.next = next

    '''
    Returns the value at the head of the list
    @throws - Exception - If the list is empty
    @return - the value of the head node
    '''
    def peekFirst(self):
        if self.head is None:
            raise Exception("List is empty")

        return self.head.data

    '''
    Returns the value at the tail of the list
    @throws - Exception - If the list is empty
    @return - the value of the tail node
    '''
    def peekLast(self):
        if self.head is None:
            raise Exception("List is empty")

        temp = self.head
        while temp.next is not None:
            temp = temp.next

        return temp.data

    '''
    Returns the value at the given index
    @param - index - the index of the node to be returned
    @throws - Exception - If the index is negative
    @throws - Exception - If the list is empty
    @throws - Exception - If the index is out of bounds
    @return - the value of the node at the given index
    '''
    def peekAtIndex(self, index):
        if index < 0:
            raise Exception("Negative index is not allowed")

        if self.head is None:
            raise Exception("List is empty")

        if index == 0:
            return self.head.data

        i = 0
        temp = self.head
        while i < index and temp is not None:
            temp = temp.next
            i += 1

        if temp is None:
            raise Exception("Index is out of bounds")

        return temp.data


    '''
    Checks if a node is present in this list
    @param - node - the value of the node to be searched for
    @throws - Exception - If the list is empty
    @return - True if the value is present otherwise False
    '''
    def contains(self, node):
        if self.head is None:
            raise Exception("List is empty")

        if self.head.data == node:
            return True
        
        temp = self.head
        while temp.next is not None:
            if temp.next.data == node:
                return True
            temp = temp.next

        return False

    '''
    Reverses the order of the list
    @throws - Exception - If the list is empty
    '''
    def reverseList(self):
        if self.head is None:
            raise Exception("List is empty")

        previous = None
        temp = self.head
        while temp is not None:
            next = temp.next
            temp.next = previous
            previous = temp
            temp = next
        self.head = previous

    '''
    Appends one last to the end of this list
    @param - list - the LinkedList to be appended
    '''
    def concat(self, list):
        if list.head is None:
            return
        
        if self.head is None:
            self.head = list.head
            return

        temp = self.head
        while temp.next is not None:
            temp = temp.next

        temp.next = list.head

    '''
    Copies the list passed in on top of this list
    @param - list - the LinkedList to be copied
    '''
    def copy(self, list):
        self.head = list.head


    '''
    Individually displays the contents of every node in the list
    '''
    def displayList(self):
        temp = self.head
        while temp:
            print(temp.data)
            temp = temp.next


if __name__ == "__main__":
    list = LinkedList()
    list2 = LinkedList()

    list.append("Node 1")
    list.append("Node 2")
    list.append("Node 3")
    list2.append("1")
    list2.append("2")

    list.copy(list2)
    list.displayList()
