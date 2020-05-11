const cardSelect =  [{"hearts":["A","2","3","4","5","6","7","8","9","10","J","Q","K"]},
                {"spades":["A","2","3","4","5","6","7","8","9","10","J","Q","K"]},
                {"clubs":["A","2","3","4","5","6","7","8","9","10","J","Q","K"]},
                {"diamonds":["A","2","3","4","5","6","7","8","9","10","J","Q","K"]}
                ];

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
        let random = Math.floor(Math.random());
        let indexnum = isFinite(random)

        // act
        const result = cards(indexnum);

        //assert
        expect(result).toBe(true);
    });

    it("should return true", function(){

        // arrange
        let i = Math.floor(Math.random(0,3));
        let cardname = cards[i];
        let indexnum = isNaN(cardname);

        // act
        const result = cards(indexnum);

        //assert
        expect(result).toBe(true);
    });
});