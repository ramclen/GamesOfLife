import Rules from '../game/Rules';
import Token from './Token';
import Board from '../game/Board';
import Mind from '../mind/Mind';
import Decision from '../mind/Decision';

export default class Gamer {
    mind: Mind;
    token: Token;
    decisions: Decision[];
    board: Board;

    constructor(mind: Mind, token: Token) {
        this.mind = mind;
        this.token = token;
        this.decisions = [];
    }

    yourTurn(): void {
        this.decisions.forEach(decision => decision.run());
    }

    think(): void {
        this.decisions = this.mind.takeDecisions(this.board, this.token);
    }

    setRules(rules: Rules): void {
        this.mind.learnRules(rules);
    }

    showBoard(board: Board): void {
        this.board = board;
    }
}
