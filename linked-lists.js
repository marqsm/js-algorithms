function LinkedList(itemSet) {

    function Node(value) {
        this.next = undefined;
        this.value = value;

        return this;
    }

    this.head = undefined;
    this.tail = undefined;
    this.length = 0;

    var list = this;

    // insert a new item to current position.
    this.pushTail = function(value) {
        var newItem = new Node(value);

        if (list.head == undefined) {
            list.head = newItem;
            list.tail = list.head;
            // list is empty, no prev.
        } else {
            list.tail.next = newItem;
            list.tail = newItem;
        }
        list.length += 1;
        return newItem;
    }

    this.pushHead = function(value) {
        var newItem = new Node(value);

        if (list.head == undefined) {
            list.pushTail(value);
        } else {
            newItem.next = list.head;
            list.head = newItem;
        }
        list.length += 1;
        return newItem;
    }

    // remove item.. or position
    this.popHead = function(item) {
        var item = list.head.value;

        if (list.length == 0) {

        }

        list.head = list.head.next;
        list.length -= 1;

        return item;
    }

    this.popTail = function() {
        var item = list.tail.value,
            current = list.head;

        if (current.next == undefined) return undefined;

        while (current.next.next !== undefined) {
            current = current.next;
        }
        list.length -= 1;
        current.next = undefined;
        return item;
    }


    return this;
}

var ml = new LinkedList();

