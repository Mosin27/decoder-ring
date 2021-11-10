// Write your tests here!
const {caesar} = require("../src/caesar");
const {expect, assert} = require("chai");  


describe("caesar()", () => {


    it("caesar is a function", () => {
        expect (caesar).to.be.a("function")
    });
    //It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
    it("Returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.", () => {
        const wrongShift = [0, -50, 50, undefined];
        const input = "You Shall Not Pass!"
        const shift = 3;
        const actual = wrongShift.every((shift) =>{
            return !caesar(input, shift);
        });
        expect(actual).to.be.true;
    });
    //It ignores capital letters. 
    it("Ignores capitalized letters", () => {
        const input = "You Shall Not Pass!";
        const shift = 3;
        const expected = "brx vkdoo qrw sdvv!"
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
    //When encoding, it handles shifts that go past the end of the alphabet.
    it("When encoding, it handles shifts that go past the end of the alphabet", () => {
        const input = "abcdef"
        const shift = -6;
        const expected = "uvwxyz";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
    
    //It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
    it("It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", () => {
        const input = "hello world!";
        const shift = 5;
        const expected = "mjqqt btwqi!";
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
})