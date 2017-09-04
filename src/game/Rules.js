import Board from "./Board";
import Token from "./Token";

export default class Rules {

    constructor(rules){
        this.rules = rules;
    }

    giveTokenStatus(token:Token, board:Board):Token.status{
        var tokens = this.getTokensAround(board, token);
        if(token.status === Token.status.live)
            return this.livesRules(tokens);
        else
            return tokens.length == 3 ? Token.status.live : Token.status.death;
    }

    livesRules(tokens) {
        return (this.underpopulation(tokens) || this.overpopulation(tokens)) ? Token.status.death : Token.status.live;
    }

    overpopulation(tokens) {
        return tokens.length > 3;
    }

    underpopulation(tokens) {
        return tokens.length < 2;
    }

    getTokensAround(board, token) {
        var coordinates = this.getAroundPositions(board.getTokenCoordinates(token))
        var tokens = coordinates.map(coordinates => {
            return board.getPosition(coordinates)
        })
        tokens = tokens.filter(element => {
            return element;
        })
        return tokens;
    }

    giveMovements(token, board){

    }

    checkGameStatus(board){

    }

    getAroundPositions([x, y]){
        let positions = [];
        for(let i=-1;i<2; i++) {
            for(let j=-1; j<2; j++) {
                if(i==0 && j==0) continue;
                positions.push([x + i, y + j]);
            }
        }
        return positions;
    }
}