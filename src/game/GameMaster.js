import Game from "./Game";

export default class GameMaster {
    constructor(game:Game, gamers){
        this.game = game;
        this.gamers = gamers;
    }

    run(){
        this.startTheGame();
        setInterval(() => {
            console.log(this.aTurn().next().value);
        }, 1000);

    }

    * aTurn() {
        this.gamers.forEach(gamer => {
            gamer.think();
        })
        this.gamers.forEach(gamer => {
            gamer.yourTurn();
        })
        this.checkEnd(this.game);
        yield this.game.board.toString();
    }

    startTheGame() {
        this._readRules();
        this.game.start();
    }

    _readRules() {
        this.gamers.forEach(gamer =>{
            gamer.setRules(this.game.rules);
            gamer.showBoard(this.game.board);
        })
    }


    checkEnd(game) {
        //TODO
    }
}