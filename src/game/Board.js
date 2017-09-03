import Gamer from "./Gamer";
import Token from "./Token";

export default class Board {
    constructor() {
        this.state = {};
        this.height = 0;
    }

    addRow(rowState){
        this.state[this.height++] = rowState;
        return this;
    }

    numberOfGamers(){
        let gamers=0;
        for(let i=0; i<this.height; i++)
            gamers += this._gamersOnRow(i);
        return gamers;
    }

    _gamersOnRow(height) {
        return this.state[height].reduce((sum, element) => element instanceof Token ? ++sum : sum, 0);
    }
}

