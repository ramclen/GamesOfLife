import {expect, assert} from 'chai';
import Game, { GAME_STATUS } from '../src/game/Game';
import Rules from '../src/game/Rules';
import Board from '../src/game/Board';
import 'mocha';

describe('A Game', () => {
    let game: Game;
    beforeEach(() => {
        game = new Game(new Board(), new Rules());
    });

    it('should have a board', () => {
        assert.ok(game.board instanceof Board);
    });

    it('should have a rules', () => {
        assert.ok(game.rules instanceof Rules);
    });

    it('should be able to start', () => {
        game.start();
        assert.equal(GAME_STATUS.started, game.status);
    });

    it('should be initial status', () => {
        assert.equal(GAME_STATUS.created, game.status);
    });

    it('should be finish status', () => {
        game.end();
        assert.equal(GAME_STATUS.finished, game.status);
    });

    it('Should be possible to go next turn', () => {
        game.nextTurn();
        assert.equal(1, game.turn);
    });
});







