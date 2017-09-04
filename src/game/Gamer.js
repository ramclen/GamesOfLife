import Rules from "./Rules";
import Token from "./Token";
import Board from "./Board";

export default class Gamer {
    constructor(){
        this.nextTurn = [];
    }

    yourTurn(){
        if(this.nextTurn.length!==0)
            this.nextTurn.forEach(action => action());
        let tokenStatus = this.rules.giveTokenStatus(this.token, this.board);
        this.nextTurn.push(() => this.token.status = tokenStatus);
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
