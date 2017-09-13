import assert from 'assert';
import {beforeEach} from "mocha";
import Game from "../src/game/Game";
import Rules from "../src/game/Rules";
import Board from "../src/game/Board";

describe("A Game", () => {
    var game: Game;
    beforeEach(function () {
        game = new Game(new Board(3, 3), new Rules());
    });

    it("should have a board", function () {
        assert.ok(game.board instanceof Board);
    });

    it("should have a rules", function () {
        assert.ok(game.rules instanceof Rules);
    });

    it("should be able to start", function () {
        game.start();
        assert.equal(Game.STATUS.started, game.status)
    });

    it("should be initial status", function () {
        assert.equal(Game.STATUS.created, game.status)
    });

    it("should be finish status", function () {
        game.end();
        assert.equal(Game.STATUS.finished, game.status)
    });

    it("Should be possible to go next turn", ()=>{
        game.nextTurn();
        assert.equal(1, game.turn)
    })
})







