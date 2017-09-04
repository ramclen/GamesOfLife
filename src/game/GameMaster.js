import Game from "./Game";

export default class GameMaster {
    constructor(game:Game, gamers){
        this.game = game;
        this.gamers = gamers;
    }

    run(){
        this.startTheGame();
        setInterval(() => {
            this.aTurn();
        }, 1000);

    }

    aTurn() {
        this.gamers.forEach(gamer => {
            this.takeTurn(gamer);
        })
        this.checkEnd(this.game);
        console.log(this.game.board.toString());
    }

    startTheGame() {
        this._readRules();
        this._distributeTokens();
        this.game.start();
    }

    takeTurn(gamer) {
        gamer.yourTurn();
    }

    _readRules() {
        this.gamers.forEach(gamer =>{
            gamer.setRules(this.game.rules);
            gamer.showBoard(this.game.board);
        })
    }

    _distributeTokens() {
        this.game.board.getTokens().forEach((token, index)=>{
            this.gamers[index].bringToken(token);
        })
    }

    checkEnd(game) {
        //TODO
    }
}