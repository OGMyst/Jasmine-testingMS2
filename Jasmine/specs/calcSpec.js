const cardValue =  ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

const cardSuit = ["Hearts", "Spades", "Clubs", "Diamonds"];

describe("randomiser", function(){
    it("should return a number", function(){
        // arrange
        let indexnum = 2;
        // act
        const result = cards(indexnum);
        //assert
        expect(result).toBe(2);
    });

    it("should return true", function(){
        // arrange
        let i = Math.floor(Math.random(1,9));
        let indexnum = isFinite(i)
        // act
        const result = cards(indexnum);
        //assert
        expect(result).toBe(true);
    });

    it("should return true", function(){
        // arrange
        let cardname = cardValue[2];
        let indexnum = cardname;
        // act
        const result = cards(indexnum);
        //assert
        expect(result).toBe("3");
    });

});