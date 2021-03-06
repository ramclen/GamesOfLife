import Board from '../src/game/Board';
import Gamer from '../src/gamer/Gamer';
import Token from '../src/gamer/Token';
import {expect, assert} from 'chai';
import 'mocha';

describe('A board', () => {
    let board, token, token2;
    beforeEach(() => {
        board = new Board();
        token = new Token();
        token2 = new Token();
        board
            .addRow([undefined, token, undefined, token2, undefined, undefined])
            .addRow([undefined, new Token(), undefined, new Token(), undefined, undefined])
            .addRow([undefined, new Token(), undefined, undefined, undefined, new Token()]);
    });

    it('should be able to add initial state',  () => {
        assert.equal(board.height, 3);
        assert.equal(board.numberOfGamers(), 6);
    });

    it('should be possible move a token of position',  () => {
        board.move(token, [1, 2]);
        const _token = board.getPosition([1, 2]);
        assert.equal(_token.id, token.id);
    });

    it('should not be possible move a token of occupied position',  () => {
        expect(() => board.move(token, [0, 1])).to.throw();
    });

    it('should be able to get all tokens', () => {
        expect(board.getTokens().length).to.equal(6);
        expect(board.getTokens()[2]).to.instanceOf(Token);
    });

    it('should not pass the borders', () => {
        const coor = [board.width, board.height];
        expect(board.move.bind(token2, coor)).to.throw();
    });
});
