import assert from "assert";
import Board from "../src/game/Board";
import Gamer from "../src/game/Gamer";
import Token from "../src/game/Token";

describe("A board", () => {
    var board;
    beforeEach(function () {
        board = new Board();
    })

    it("should be able to add initial state", function () {
        board
            .addRow([undefined, new Token(), undefined, new Token(), undefined, undefined])
            .addRow([undefined, new Token(), undefined, new Token(), undefined, undefined])
            .addRow([undefined, new Token(), undefined, undefined, undefined, new Token()])

        assert.equal(board.height, 3);
        assert.equal(board.numberOfGamers(), 6)
    });

    it("should be possible move a token of position", function() {
        board
    })

});