import Rules from './Rules';
import Board from './Board';

class Game {
    board: Board;
    turn: number;
    rules: Rules;
    status: any;

    constructor(board: Board, rules: Rules) {
        this.board = board;
        this.turn = 0;
        this.rules = rules;
        this.status = GAME_STATUS.created;
    }

    start(): void {
        this.status = GAME_STATUS.started;
    }

    nextTurn(): void {
        ++this.turn;
    }

    end(): void {
        this.status = GAME_STATUS.finished;
    }
}

enum GAME_STATUS {
    started = 'started',
    created = 'created',
    finished = 'finished'
}

export default Game;
