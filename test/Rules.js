import assert from 'assert';
import {beforeEach} from "mocha";
import Board from "../src/game/Board";
import Token from "../src/game/Token";
import Rules from "../src/game/Rules";
import {expect} from "chai";

//I'm going to write test for conway game and prepare for future iterations
describe("A Rules", () => {
    var rules, board, deathToken, liveToken;
    beforeEach(function () {
        deathToken = new Token();
        liveToken = new Token();
        board = new Board()
            .addRow([undefined, deathToken, undefined, liveToken, new Token(), undefined])
            .addRow([undefined, new Token(), undefined, new Token(), undefined, undefined])
            .addRow([undefined, new Token(), undefined, undefined, undefined, new Token()]);
        rules = new Rules();
    });

    it("should give me possibles movements", function () {
        //TODO
        rules.giveMovements(deathToken, board)
    });

    it("should give me a death status for underpopulation", function() {
        let status = rules.giveTokenStatus(deathToken, board)
        expect(status).to.equal(Token.status.death)
    })

    it("should give me a live status because is 2 lives cell", function() {
        let status = rules.giveTokenStatus(liveToken, board)
        expect(status).to.equal(Token.status.live)
    })

    it("should give me my token status", function() {
        rules.giveTokenStatus(deathToken, board)
    })

    it("should return state of game", function () {
        rules.checkGameStatus(board);
    })

});

