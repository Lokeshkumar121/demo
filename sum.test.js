import sum from "./sum";

describe("Test for multiple function ", () => {
    test("adds 2 + 2 to equal 4 ", () => {
        expect(sum(2, 2)).toBe(4); // expect -- input raka jata hai or tobe mian --- output 
    })

    // check for add -ve numbers 
    test("add nevgative numbers -5 + -5 equal to -10 " , () => {
        expect(sum(-5 , -5)).toBe(-10) 
    })
})

// npm test ( manaul test ) as develpoer jo ki local system khud  kerte hai boh developer hi check kerta hai 