var expect = chai.expect;

var ll = new LinkedList();

describe("JS-algorithms", function() {

    ll.add(5);

    describe("get head", function() {
        it("manages to get head", function() {
            expect(ll.head.value).to.equal(5);
        });
    });

    ll.add(6);
    ll.add(7);

    describe("get tail", function() {
        it("manages to get last item", function() {
            expect(ll.tail.value).to.equal(7);
        });
    });

    describe("get length", function() {
        it("manages to get list length", function() {
            expect(ll.length).to.equal(3);
        });
    });


});