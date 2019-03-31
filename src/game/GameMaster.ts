import Game from './Game';
import Gamer from '../gamer/Gamer';
import Mind from '../mind/Mind';
import Token, { TOKEN_STATUS } from '../gamer/Token';

export default class GameMaster {
    game: Game;
    players: Gamer[];
    eventActions: {};

    constructor(game: Game, players: Gamer[]) {
        this.game = game;
        this.players = players;
        this.eventActions = {
            'newGamer' : (value) => {
                console.log(value[2]);
                const mindModules = value[0].mindStructure.concat(value[1].mindStructure).filter(module => Math.random() <= 0.5);
                const mind = new Mind();
                mindModules.forEach(psyco => {
                    mind.addPsycho(psyco);
                });
                const gamer = new Gamer(mind, new Token(TOKEN_STATUS.live));
                try {
                    if (!this.game.board.getPosition(value[2])) {
                        gamer.setRules(this.game.rules);
                        gamer.showBoard(this.game.board);
                        this.game.board.setNewToken(gamer.token, value[2]);
                        console.log('se ha creado vida!');
                        this.players.push(gamer);
                        return true;
                    }
                } catch (e) {
                    console.log(e);
                    return false;
                }
                return false;
            }
        };
    }

    run(): void {
        this.startTheGame();
        setInterval(() => {
            console.log(this.aTurn().next().value);
        }, 1000);

    }

    * aTurn(): Iterator<string> {
        const status = this.game.board.toString();
        this.players.forEach(gamer => {
            gamer.think();
        });
        this.players.forEach(gamer => {
            gamer.yourTurn();
        });

        this.players.forEach(gamer => {
            gamer.events = gamer.events.filter(event => {
                return !this.eventActions[event.name](event.value);
            });
        });

        this.checkEnd(this.game);
        yield status;
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
