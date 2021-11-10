// Write your tests here!
const {polybius} = require("../src/polybius");
const {expect, assert} = require("chai");


describe("polybius", () => {
    //When encoding, it translates the letters i and j to 42.
    it("When encoding, it translates the letter i and j to 42", () => {
        const expected = "4242";
        const actual = polybius("ij");
        expect(actual).to.equal(expected);
    })
    //When decoding, it translates 42 to (i/j).
    it("When decoding, it translates 42 to (i/j).", () => {
        const expected = "(i/j)";
        const actual = polybius("42", false)
        expect(actual).to.equal(expected);
    })
    //It ignores capital letters. (For example, the results of A Message and a message should be the same.)
    it("It ignores capital letters", () => {
        const expected = "3251131343 2543241341"
        const actual = polybius("Hello World")
        expect(actual).to.equal(expected);
    })
    //It maintains spaces in the message, before and after encoding or decoding.
    it("It maintains spaces in the message, before and after encoding", () => {
        const expected = "21131131522511445124 53112452"
        const actual = polybius("Blackwater Park")
        expect(actual).to.equal(expected);
    })
})