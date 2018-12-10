describe('Accumulator', function () {

    var target = null;

    beforeEach(function () {
        target = new Accumulator();
    });

    it('add should adding', function () {
        target.value = 1;
        target.add(2);
        expect(target.value).toEqual(3);
    });

    it('sub should substracting', function () {
        target.value = 3;
        target.sub(2);
        expect(target.value).toEqual(1);
    });

    it('sub should substracting only available', function () {
        expect(target.value).toEqual(0);
    });

    it('sub should substracting only available', function () {
        target.value = 1;
        target.sub(2);
        expect(target.value).toEqual(0);
    });
});