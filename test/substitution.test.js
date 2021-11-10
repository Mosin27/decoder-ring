const {substitution} = require("../src/substitution");
const {expect, assert} = require("chai");


describe("substitution", () => {
    //It returns false if the given alphabet isn't exactly 26 characters long.
    it("It returns false if the given alphabet isn't exactly 26 characters long.", () => {
        const actual = substitution("too", "short")
        expect(actual).to.be.false
    })
    //It correctly translates the given phrase, based on the alphabet given to the function.
    it("It correctly translates the given phrase, based on the alphabet given to the function.", () => {
        const expected = "itssg vgksr"
        const actual = substitution("hello world", "qwertyuiopasdfghjklzxcvbnm")
        expect(actual).to.equal(expected);
    })
    //It returns false if there are any duplicate characters in the given alphabet.
    it("It returns false if there are any duplicate characters in the given alphabet.", () => {
        const actual = substitution("hello world", "qwertyuiopasdfghjklzxcvbnq")
        expect(actual).to.be.false;
    })
    //It maintains spaces in the message, before and after encoding or decoding.
    it("It maintains spaces in the message, before and after encoding or decoding.", () => {
        const actual = substitution("You Shall Not Pass", "qwertyuiopasdfghjklzxcvbnm")
        const expected = "ngx liqss fgz hqll"
        expect(actual).to.equal(expected);
    })
    //It ignores capital letters. (For example, the results of A Message and a message should be the same.)
    it("It ignores capital letters.", () => {
        const actual = substitution("COMBO BREAKER", "qwertyuiopasdfghjklzxcvbnm")
        const expected = "egdwg wktqatk"
        expect(actual).to.equal(expected);
    })


})