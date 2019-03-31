import PsychoModule from './PsychoModule';
import Token from '../gamer/Token';
import {DecisionEvent} from '../mind/DecisionEvent';
import Board from '../game/Board';
import Rules from '../game/Rules';
import Decision from '../mind/Decision';
import { GeneticInformation } from 'src/gamer/GeneticInformation';

export class PsychoReproductionModule extends PsychoModule {
    gestationQueue: GeneticInformation[] = [];

    _run(board: Board, rules: Rules, token: Token): Decision {
        token.addProperty('reproductionQueue', []);
        return new Decision(() => {
            if (this.gestationQueue.length > 0) {
                const event = new DecisionEvent('newGamer',
                                    [token.geneticInformation, this.gestationQueue[0], board.getTokenCoordinates(token)]);
                this.gestationQueue = [];
                return event;
            }
            const [x, y] = board.getTokenCoordinates(token);
            const externalToken = board.getPosition([this.randomIncrease(x), this.randomIncrease(y)]);
            if (externalToken) {
                if (token.getPropertyValue('reproductionQueue').find(reproTokens => reproTokens.id === externalToken.id)) {
                    this.gestationQueue.push(externalToken.geneticInformation);
                } else {
                    if (externalToken.getPropertyValue('reproductionQueue')) {
                        externalToken.setPropertyValue('reproductionQueue',
                                        externalToken.getPropertyValue('reproductionQueue').concat(token));
                    }
                }
            }
        });
    }

    private randomIncrease(coordinate: number): number {
        if ((Math.random()) <= 0.5 ) {
            return coordinate + Math.round((Math.random()));
        } else {
            return coordinate - Math.round((Math.random()));
        }
    }

}
