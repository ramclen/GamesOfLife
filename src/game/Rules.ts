import Board from './Board';
import Token, { TOKEN_STATUS } from '../gamer/Token';

export default class Rules {

    constructor() {
    }

    giveTokenStatus(token: Token, board: Board): TOKEN_STATUS {
        const tokens = this.liveTokens(this.getTokensAround(board, token));
        if (token.status === TOKEN_STATUS.live) {
            return this.livesRules(tokens);
        } else {
            return tokens.length === 3 ? TOKEN_STATUS.live : TOKEN_STATUS.death;
        }
    }

    giveMovements(token: Token, board: Board): void {
        // TODO:
    }

    checkGameStatus(board: Board): boolean {
        // TODO:
        return false;
    }


    private livesRules(tokens: Token[]): TOKEN_STATUS {
        return (this.underpopulation(tokens) || this.overpopulation(tokens)) ? TOKEN_STATUS.death : TOKEN_STATUS.live;
    }

    private overpopulation(tokens: Token[]): boolean {
        return tokens.length > 3;
    }

    private underpopulation(tokens: Token[]): boolean {
        return tokens.length < 2;
    }

    private getTokensAround(board: Board, token: Token): Token[] {
        const coordinates = this.getAroundPositions(board.getTokenCoordinates(token));
        const tokens = coordinates.map(_coordinates => {
            return board.getPosition(_coordinates);
        }).filter(element => {
            return element;
        });
        return tokens;
    }

    private getAroundPositions([x, y]: any[]): any[] {
        const positions = [];
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if (i === 0 && j === 0) { continue; }
                positions.push([x + i, y + j]);
            }
        }
        return positions;
    }

    private liveTokens(tokens: Token[]): Token[] {
        return tokens.filter(token => token.status === TOKEN_STATUS.live);
    }
}
