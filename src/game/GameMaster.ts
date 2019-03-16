import Game from './Game';
import Gamer from '../gamer/Gamer';

export default class GameMaster {
    game: Game;
    players: Gamer[];

    constructor(game: Game, players: Gamer[]) {
        this.game = game;
        this.players = players;
    }

    run(): void {
        this.startTheGame();
        setInterval(() => {
            console.log(this.aTurn().next().value);
        }, 1000);

    }

    * aTurn(): Iterator<string> {
        this.players.forEach(gamer => {
            gamer.think();
        });
        this.players.forEach(gamer => {
            gamer.yourTurn();
        });
        this.checkEnd(this.game);
        yield this.game.board.toString();
    }

    startTheGame(): void {
        this.readRules();
        this.game.start();
    }

    private readRules(): void {
        this.players.forEach(gamer => {
            gamer.setRules(this.game.rules);
            gamer.showBoard(this.game.board);
        });
    }


    checkEnd(game: Game): void {
        // TODO
    }
}
