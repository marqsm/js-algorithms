var expect = chai.expect;

var ll = new LinkedList();

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

    describe("Binary Heap", function() {
        xit("heap.insert()", function() {
            expect(null).to.equal(true);
        });

        xit("heap.max()", function() {
            expect(null).to.equal(true);
        });

        xit("heap.delMax()", function() {
            expect(null).to.equal(true);
        });

        xit("heap.isEmpty()", function() {
            expect(null).to.equal(true);
        });

        xit("heap.size()", function() {
            expect(null).to.equal(true);
        });
    });

});