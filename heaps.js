function PriorityQueue() {
    var pq = [null]; // index 0 empty, parent of node k is at k/2, children of k at 2k and 2k+1

    // exchange items at positions i & j
    function exchange(i, j) {
        var temp = pq[j];
        pq[j] = pq[i];
        pq[i] = temp;
    }

    function less(i, j) {
        if (pq[i] < pq[j]) return true;
        return false;
    }

    // switch element with parent, until parent is bigger than element
    function swim(key) {
        while ((key > 1) && less(parseInt(key/2, 10), key)) {
            exchange(key, parseInt(key/2, 10));
            key = parseInt(key/2, 10);
        }
    }

    // following element, switch with child until new parent > element.
    function sink(key) {
        var N = pq.length - 1;

        while (2*key <= N) {
            var j = 2*key;
            if (j < N && less(j, j+1)) j++;
            if (!less(key, j)) break;
            exchange(key, j);
            key = j;
        }
    }

    // if child is bigger then parent, swap. Repeat until order restored.
    this.insert = function(value) {
        // TODO: accept array input also, if array just loop through..
        pq.push(value);
        swim(pq.length - 1);
    }

    this.max = function() {
        return pq[1];
    }

    // return copy of data-array, remove convenience-element from position 0.
    this.getArray = function() {
        return pq.slice(1)
    }

    this.delMax = function() {
        var max = pq[1];
        exchange(1, pq.length - 1);
        pq.pop(); // remove last
        sink(1);
        return max;
    }

    this.empty = function() {
        pq = [null];
    }

    this.isEmpty = function() {
        if (pq.length > 1) return false;
        return true;
    }

    this.size = function() {
        return pq.length - 1;       // first item in pq-array is empty to simplify calculations.
    }

    return this;
}