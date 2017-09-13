import Gamer from "../gamer/Gamer";
import Token from "../gamer/Token";
import {findKey, values} from "lodash/object";

export default class Board {
    constructor() {
        this.state = {};
        this.height = 0;
        this.width = 0;
    }

    getTokenCoordinates(token:Token){
        return this.state[token.id].coordinates;
    }

    addRow(rowState){
        for(let i=0; i<rowState.length; i++){
            if(rowState[i])
                this.state[rowState[i].id] = {token:rowState[i], coordinates:[this.height, i]};
        }
        this.width = this.width < rowState.length? rowState.length : this.width ;
        this.height++;
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
        var key = findKey(this.state, element=>{
            return (element.coordinates[0] == x && element.coordinates[1] == y);
        })
        if(!key) {
            //console.error("Key not found on position " + x + ":" + y);
            return;
        }
        return this.state[key].token;
    }

    getTokens(){
        return values(this.state).map(value => value.token);
    }

    toString(){
        var string = "";
        for(let i=0; i<this.height; i++){
            string+="|"
            for(let j=0; j<this.width; j++){
                let token = this.getPosition([i, j]);
                string += (token? token.toString() : ' ');
            }
            string += "| \n";
        }
        return string;
    }
}

