function BST() {
    // expose root to facilitate debugging and testing.
    bst = this;
    bst.root = undefined;

    function Node(key, value, N) {
        //this.left = undefined;
        //this.right = undefined;
        this.N = N;     // nodes in subtree.
        this.key = key;
        this.value = value;
    }

    function compare(key, key2) {
        if      (key < key2) return -1;
        else if (key > key2) return 1;
        return 0;
    }

    // if key in tree, reset value
    // if key not in tree, put key in tree
    function _put(node, key, value) {
        // first in BST
        if (node == undefined) return new Node(key, value, 1);

        var cmp = compare(key, node.key);

        if        (cmp < 0) node.left  = _put(node.left, key, value);
        else if   (cmp > 0) node.right = _put(node.right, key, value);
        else /*(cmp == 0)*/ node.value = value;

        return node;
    }

    this.empty = function() {
        bst.root = undefined;
    }

    this.put = function(key, value) {
        bst.root = _put(bst.root, key, value);
    }

    this.get = function(key) {
        return _get(bst.root, key);
    }

    function _get(node, key) {
        if (node == undefined) return undefined;

        while (node != undefined) {
            if      (compare(key, node.key) < 0) return _get(node.left, key);
            else if (compare(key, node.key) > 0) return _get(node.right, key);
            else    return node.value;
        }
    }


    this.delete = function(key) {
    }

    // TODO: iterable in Java.. think of a good way to do this in JS
    this.next = function() {

    }

    return this;
}