import assert from "assert";
import Board from "../src/game/Board";
import Gamer from "../src/game/Gamer";
import Token from "../src/game/Token";
import {expect} from "chai";

describe("A board", () => {
    var board, token;
    beforeEach(function () {
        board = new Board();
        token = new Token();
        board
            .addRow([undefined, token, undefined, new Token(), undefined, undefined])
            .addRow([undefined, new Token(), undefined, new Token(), undefined, undefined])
            .addRow([undefined, new Token(), undefined, undefined, undefined, new Token()])
    })

    it("should be able to add initial state", function () {
        assert.equal(board.height, 3);
        assert.equal(board.numberOfGamers(), 6)
    });

    it("should be possible move a token of position", function () {
        board.move(token, [1, 3]);
        var _token = board.getPosition([1, 3]);
        assert.equal(_token.id, token.id)
    })

    it("should not be possible move a token of occupied position", function () {
        expect(()=>board.move(token, [1, 1])).to.throw()
    })



});