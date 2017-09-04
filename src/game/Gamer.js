import Rules from "./Rules";
import Token from "./Token";
import Board from "./Board";

export default class Gamer {
    constructor(){
        this.decision = [];
    }

    yourTurn(){
        if(this.decision.length!==0){
            this.decision.forEach(action => action());
            this.decision = [];
        }

    }

    think(){
        let tokenStatus = this.rules.giveTokenStatus(this.token, this.board);
        this.decision.push(() => this.token.status = tokenStatus);
    }

    setRules(rules:Rules) {
        this.rules = rules;
    }

    bringToken(token:Token){
        this.token = token;
    }

    showBoard(board:Board){
        this.board = board;
    }
}
