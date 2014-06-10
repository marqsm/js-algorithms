var expect = chai.expect;

var ll = new LinkedList();
var pq = new PriorityQueue();

describe("JS-algorithms", function() {

    describe("Linked list / dequeue", function() {
        it("list.pushTail()", function() {
            ll.pushTail(5);
            expect(ll.head.value).to.equal(5);
        });

        it("list.tail", function() {
            ll.pushTail(7);
            expect(ll.tail.value).to.equal(7);
        });

        it("list.length", function() {
            expect(ll.length).to.equal(2);
        });

        it("list.pushHead()", function() {
            ll.pushHead(6);
            expect(ll.head.value).to.equal(6);
        });

        it("list.popTail()", function() {
            ll.pushTail(8);
            expect(ll.popTail()).to.equal(8);
        });

        it("list.popHead()", function() {
            ll.pushHead(2);
            expect(ll.popHead()).to.equal(2);
            expect(ll.length).to.equal(3);
        });
    });

    describe("Priority Queue (binary heap)", function() {
        it("heap.insert()", function() {
            [1, 2, 3, 4, 6, 5, 9, 8, 7, 10].forEach(function(value) {
                pq.insert(value);
            });
            expect(pq.size()).to.equal(10);
        });

        it("heap.delMax()", function() {
            pq.empty();
            [1, 2, 3, 4, 6, 5, 9, 8, 7, 10].forEach(function(value) {
                pq.insert(value);
            });
            expect(pq.delMax()).to.equal(10);
            expect(pq.delMax()).to.equal(9);
            expect(pq.delMax()).to.equal(8);
        });

        it("heap.isEmpty()", function() {
            pq.empty();
            expect(pq.isEmpty()).to.equal(true);
            pq.insert(10);
            expect(pq.isEmpty()).to.equal(false);
        });

        it("heap.size()", function() {
            pq.empty();
            [1, 2, 3, 4, 6, 5, 9, 8, 7, 10].forEach(function(value) {
                pq.insert(value);
            });
            expect(pq.size()).to.equal(10);
            pq.delMax();
            pq.delMax();
            pq.delMax();
            expect(pq.size()).to.equal(7);
        });
    });

});