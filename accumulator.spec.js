describe('Accumulator',function(){

    var target=null;

    beforeEach(function(){
        target=new Accumulator();
    });
     
    it('add should adds',function(){
        target.value=1;
        target.add(2);
        expect(target.value).toEqual(3);
    });
     
    it('remove should removes',function(){
        target.value=3;
        target.remove(2);
        expect(target.value).toEqual(1);
    });
     
    it('remove should remove only available',function(){
        target.value=1;
        target.remove(2);
        expect(target.value).toEqual(0);
    });
});