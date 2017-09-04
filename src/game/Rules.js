import Board from "./Board";
import Token from "./Token";

export default class Rules {

    constructor(rules){
        this.rules = rules;
    }

    giveTokenStatus(token:Token, board:Board):Token.status{
        var tokens = this._liveTokens(this._getTokensAround(board, token));
        if(token.status === Token.status.live)
            return this._livesRules(tokens);
        else
            return tokens.length == 3 ? Token.status.live : Token.status.death;
    }

    giveMovements(token, board){

    }

    checkGameStatus(board){

    }


    _livesRules(tokens) {
        return (this._underpopulation(tokens) || this._overpopulation(tokens)) ? Token.status.death : Token.status.live;
    }

    _overpopulation(tokens) {
        tokens.length > 3;
    }

    _underpopulation(tokens) {
        return tokens.length < 2;
    }

    _getTokensAround(board, token) {
        var coordinates = this._getAroundPositions(board.getTokenCoordinates(token))
        var tokens = coordinates.map(coordinates => {
            return board.getPosition(coordinates)
        }).filter(element => {
            return element;
        })
        return tokens;
    }

    _getAroundPositions([x, y]){
        let positions = [];
        for(let i=-1;i<2; i++) {
            for(let j=-1; j<2; j++) {
                if(i==0 && j==0) continue;
                positions.push([x + i, y + j]);
            }
        }
        return positions;
    }

    _liveTokens(tokens) {
        return tokens.filter(token => token.status == Token.status.live);
    }
}