var expect = chai.expect;

var ll = new LinkedList();

describe("JS-algorithms", function() {

    describe("get head", function() {
        it("gets list head", function() {
            ll.pushTail(5);
            expect(ll.head.value).to.equal(5);
        });

        it("gets last item", function() {
            ll.pushTail(7);
            expect(ll.tail.value).to.equal(7);
        });

        it("gets list length", function() {
            expect(ll.length).to.equal(2);
        });

        it("gets list head", function() {
            ll.pushHead(6);
            expect(ll.head.value).to.equal(6);
        });
    });
});