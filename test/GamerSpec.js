import Gamer from "../src/gamer/Gamer";
import Token from "../src/gamer/Token";
import Mind from "../src/mind/Mind";
import {expect} from "chai";
import Decision from "../src/mind/Decision";

describe("Gamer", function() {
    var gamer:Gamer;

    beforeEach(function() {
        gamer = new Gamer(new Mind(), new Token());
    })

    it("is a token and mind ", function(){
        expect(gamer.mind).to.be.an.instanceOf(Mind);
        expect(gamer.token).to.be.an.instanceOf(Token);
    });

    it("should be able to take decisions", function () {

    })

    it("Should be possible to run her decision", function() {

    })


})