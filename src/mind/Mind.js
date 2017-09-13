import Decision from "./Decision";
import Token from "../gamer/Token";
import Board from "../game/Board";
import Rules from "../game/Rules";

export default class Mind {

    learnRules(rules:Rules){
        this.rules = rules;
    }

    takeDecision(board:Board, token:Token):Decision{
        let tokenStatus = this.rules.giveTokenStatus(token, board);
        return new Decision( ()=> token.status = tokenStatus );
    }
}