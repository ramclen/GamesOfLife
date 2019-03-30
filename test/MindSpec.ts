import Mind from '../src/mind/Mind';
import {expect} from 'chai';
import Decision from '../src/mind/Decision';
import PsychoLifeModule from '../src/psyco/PsychoLifeModule';
import PsychoMovementModule from '../src/psyco/PsychoMovementModule';
import 'mocha';
import Board from '../src/game/Board';
import Token, { TOKEN_STATUS } from '../src/gamer/Token';

describe('Mind', () => {
    let mind: Mind;

    beforeEach(() => {
        mind = new Mind();
    });

    it('should be able to take decision', () => {
        expect(mind.takeDecisions(new Board(), new Token(TOKEN_STATUS.live))[0]).to.be.an.instanceof(Decision);
    });

    it('could be injected a new psyco module', () => {
        mind.addPsycho(new PsychoLifeModule())
            .addPsycho(new PsychoMovementModule());
        expect(mind.getPsychos().length).to.equal(2);
    });
});

