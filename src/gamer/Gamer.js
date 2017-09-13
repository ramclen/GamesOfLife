import Rules from "../game/Rules";
import Token from "./Token";
import Board from "../game/Board";
import Mind from "../mind/Mind";
import Decision from "../mind/Decision";

export default class Gamer {

    constructor(mind:Mind, token:Token){
        this.mind = mind;
        this.token = token
        this.decisions = [];
    }

    yourTurn(){
        this.decisions.forEach(decision => decision.run());
    }

    think(){
        this.decisions = this.mind.takeDecisions(this.board, this.token);
    }

    setRules(rules:Rules) {
        this.mind.learnRules(rules);
    }

    showBoard(board:Board){
        this.board = board;
    }
}
