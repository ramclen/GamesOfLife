import Decision from '../mind/Decision';
import Token from '../gamer/Token';
import Board from '../game/Board';
import Rules from '../game/Rules';

export default abstract class PsychoModule {

    run(board: Board, rules: Rules, token: Token): Decision {
        return this._run(board, rules, token);
    }

    protected abstract _run(board: Board, rules: Rules, token: Token): Decision;
}
