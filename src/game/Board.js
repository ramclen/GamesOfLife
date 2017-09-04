import Gamer from "./Gamer";
import Token from "./Token";

export default class Board {
    constructor() {
        this.state = {};
        this.height = 0;
        this.width = 0;
    }

    addRow(rowState){
        this.height++;
        this.width = this.width < rowState.length? rowState.length : this.width ;
        for(let i=0; i<rowState.length; i++){
            if(rowState[i])
                this.state[rowState[i].id] = {token:rowState[i], coordinates:[this.height, i]};
        }
        return this;
    }

    numberOfGamers(){
        return Object.keys(this.state).length;
    }

    move(token, [x, y]){
        if(!this.getPosition([x, y]))
            this.state[token.id] = {token, coordinates: [x, y]};
        else
            throw new Error("Position already occupied");
    }

    getPosition([x, y]){
        return Object.keys(this.state).map((key)=>{
            if(this.state[key].coordinates[0] == x && this.state[key].coordinates[1] == y)
                return this.state[key].token;
        })[0]
    }

    toString(){
        var string = "";
        for(let i=0; i<this.height; i++){
            string+="|"
            for(let j=0; j<this.width; j++){
                string += this.getPosition([i, j])?'#':' ';
            }
            string += "| \n";
        }
        return string;
    }
}

