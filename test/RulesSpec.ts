import Board from '../src/game/Board';
import Token, { TOKEN_STATUS } from '../src/gamer/Token';
import Rules from '../src/game/Rules';
import {expect} from 'chai';
import 'mocha';

// I'm going to write test for conway game and prepare for future iterations
describe('A Rules', () => {
    let rules, board, deathToken, liveToken;
    beforeEach( () => {
        deathToken = new Token();
        liveToken = new Token();
        board = new Board()
            .addRow([undefined, deathToken, undefined, liveToken, new Token(), undefined])
            .addRow([undefined, new Token(), undefined, new Token(), undefined, undefined])
            .addRow([undefined, new Token(), undefined, undefined, undefined, new Token()]);
        rules = new Rules();
    });

    it('should give me possibles movements',  () => {
        // TODO
        rules.giveMovements(deathToken, board);
    });

    it('should give me a death status for underpopulation', () => {
        const status = rules.giveTokenStatus(deathToken, board);
        expect(status).to.equal(TOKEN_STATUS.death);
    });

    it('should give me a live status because is 2 lives cell', () => {
        const status = rules.giveTokenStatus(liveToken, board);
        expect(status).to.equal(TOKEN_STATUS.live);
    });

    it('should give me my token status', () => {
        rules.giveTokenStatus(deathToken, board);
    });

    it('should return state of game',  () => {
        rules.checkGameStatus(board);
    });

});

