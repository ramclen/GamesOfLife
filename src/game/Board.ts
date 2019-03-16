import Gamer from '../gamer/Gamer';
import Token from '../gamer/Token';
import {findKey, values} from 'lodash/object';

export default class Board {
    state: {};
    height: number;
    width: number;

    constructor() {
        this.state = {};
        this.height = 0;
        this.width = 0;
    }

    getTokenCoordinates(token: Token): any[] {
        return this.state[token.id].coordinates;
    }

    addRow(rowState: Token[]): Board {
        for (let i = 0; i < rowState.length; i++) {
            if (rowState[i]) {
                this.state[rowState[i].id] = {token: rowState[i], coordinates: [this.height, i]};
            }
        }
        this.width = this.width < rowState.length ? rowState.length : this.width ;
        this.height++;
        return this;
    }

    numberOfGamers(): number {
        return Object.keys(this.state).length;
    }

    move(token: Token, [x, y]: any[]): void {
        if (this.isOutBorder([x, y])) {
            throw new Error('Out of borders');
        }
        if (!this.getPosition([x, y])) {
            this.state[token.id] = {token, coordinates: [x, y]};
        } else {
            throw new Error('Position already occupied');
        }
    }

    getPosition([x, y]: any[]): Token {
        const key = findKey(this.state, element => {
            return (element.coordinates[0] === x && element.coordinates[1] === y);
        });
        if (!key) {
            // console.error("Key not found on position " + x + ":" + y);
            return;
        }
        return this.state[key].token;
    }

    getTokens() {
        return values(this.state).map(value => value.token);
    }

    toString(): string {
        let string = '';
        for (let i = 0; i < this.height; i++) {
            string += '|';
            for (let j = 0; j < this.width; j++) {
                const token = this.getPosition([i, j]);
                string += (token ? token.toString() : ' ');
            }
            string += '| \n';
        }
        return string;
    }

    private isOutBorder([x, y]: any[]): boolean {
        return this.width <= y || this.height <= x;
    }
}
