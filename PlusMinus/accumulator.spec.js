describe('Accumulator', function () {

    var target = null;

    beforeEach(function () {
        target = new Accumulator();
    });

    it('zeros', function () {        
        expect(target.method(0,0,0)).toEqual(0);
        expect(target.method(0,1,1)).toEqual(0);
        expect(target.method(1,0,1)).toEqual(0);
    });
});