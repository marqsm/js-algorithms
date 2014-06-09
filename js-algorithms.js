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
    this.add = function(value) {
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


    // remove item.. or position
    this.remove = function(item) {
    }

    return this;
}

var ml = new LinkedList();
