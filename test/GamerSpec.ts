import Gamer from '../src/gamer/Gamer';
import Token from '../src/gamer/Token';
import Mind from '../src/mind/Mind';
import {expect} from 'chai';
import 'mocha';

describe('Gamer', () => {
    let gamer: Gamer;

    beforeEach(() => {
        gamer = new Gamer(new Mind(), new Token());
    });

    it('is a token and mind ', () => {
        expect(gamer.mind).to.be.an.instanceOf(Mind);
        expect(gamer.token).to.be.an.instanceOf(Token);
    });

    it('Should be possible to run her decision', () => {

    });


});
