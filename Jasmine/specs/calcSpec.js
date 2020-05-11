describe("randomiser", function(){
    it("should return a number", function(){
        // arrange
        let indexnum = 2;

        const result = cards(indexnum);
        expect(result).toBe(2);
    });
});