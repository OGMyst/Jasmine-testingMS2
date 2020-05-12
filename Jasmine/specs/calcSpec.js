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

    it("should return 3", function(){
        // arrange
        let cardname = cardValue[2];
        let indexnum = cardname;
        // act
        const result = cards(indexnum);
        //assert
        expect(result).toBe("3");
    });

    it("should return true", function(){
        // arrange
        let i = Math.floor(Math.random(0,12));
        let cardname = cardValue[i];
        let indexnum = isNaN(cardname);
        // act
        const result = cards(indexnum);
        //assert
        expect(result).toBe(true);
    });

    it("should return Hearts", function(){
        // arrange
        let cardname = cardSuit[0];
        let indexnum = cardname;
        // act
        const result = cards(indexnum);
        //assert
        expect(result).toBe("Hearts");
    });

    it("should return true", function(){
        // arrange
        let i = Math.floor(Math.random(0,3));
        let cardname = cardSuit[i];
        let indexnum = isNaN(cardname);
        // act
        const result = cards(indexnum);
        //assert
        expect(result).toBe(true);
    });

    it("should return AofHearts ", function(){
        // arrange
        let cardType = cardSuit[0];
        let cardname = cardValue[0];
        let indexnum = cardname + "of"+ cardType;
        // act
        const result = cards(indexnum);
        //assert
        expect(result).toBe("AofHearts");
    });

    it("should return true", function(){
        // arrange
        let i = Math.floor(Math.random(0,3));
        let cardType = cardSuit[i];

        let j = Math.floor(Math.random(0,12));
        let cardname = cardValue[j];

        let indexnum = isNaN (cardname + "of"+ cardType);
        // act
        const result = cards(indexnum);
        //assert
        expect(result).toBe(true);
    });
});