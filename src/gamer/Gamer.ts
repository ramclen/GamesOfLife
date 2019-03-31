import Rules from '../game/Rules';
import Token from './Token';
import Board from '../game/Board';
import Mind from '../mind/Mind';
import Decision from '../mind/Decision';
import { GeneticInformation } from './GeneticInformation';
import { DecisionEvent } from '../mind/DecisionEvent';

export default class Gamer {
    mind: Mind;
    token: Token;
    decisions: Decision[];
    board: Board;
    events: DecisionEvent[];

    constructor(mind: Mind, token: Token) {
        this.mind = mind;
        this.token = token;
        this.decisions = [];
        this.events = [];
        this.token.setGeneticInfo(new GeneticInformation(this.mind.modules));
    }

    yourTurn(): void {
        this.events = this.decisions.map(decision => decision.run())
                                .filter(element => element)
                                .reduce((acc, val) => acc.concat(val), [])
                                .filter(element => element);
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
