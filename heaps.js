function BinaryHeap() {
    var heap = this;
    heap.data = [];

    function swap(i, j) {
        var temp = heap[j];
        heap[j] = heap[i];
        heap[i] = temp;
    }

    this.insert = function(value) {

    }

    this.getMax = function() {
    }

    this.popMax = function() {
    }

    return this;
}