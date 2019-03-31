import PsychoModule from './PsychoModule';
import Decision from '../mind/Decision';
import Rules from '../game/Rules';
import Token from '../gamer/Token';
import Board from '../game/Board';

export default class PsychoLifeModule extends PsychoModule {

    _run(board: Board, rules: Rules, token: Token): Decision {
        const tokenStatus = rules.giveTokenStatus(token, board);
        return new Decision( () => {
            token.status = tokenStatus;
        });
    }
}
