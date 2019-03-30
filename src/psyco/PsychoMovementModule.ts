import PsychoModule from './PsychoModule';
import Decision from '../mind/Decision';
import Board from '../game/Board';
import Rules from '../game/Rules';
import Token from '../gamer/Token';

export default class PsychoMovementModule extends PsychoModule {

    _run(board: Board, rules: Rules, token: Token): Decision {
        return new Decision(() => {
            const [x, y] = board.getTokenCoordinates(token);
            try {
                board.move(token, [x, y + 1]);
            } catch (e) {

            }

        });
    }
}
