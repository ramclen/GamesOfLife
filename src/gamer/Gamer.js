import Rules from "../game/Rules";
import Token from "./Token";
import Board from "../game/Board";
import Mind from "../mind/Mind";
import Decision from "../mind/Decision";

export default class Gamer {

    constructor(mind:Mind, token:Token){
        this.mind = mind;
        this.token = token;
    }

    yourTurn(){
        this.decision.run();
    }

    think(){
        this.decision = this.mind.takeDecision(this.board, this.token);
    }

    setRules(rules:Rules) {
        this.mind.learnRules(rules);
    }

    bringToken(token:Token){
        this.token = token;
    }

    showBoard(board:Board){
        this.board = board;
    }
}
