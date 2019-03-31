import Board from './game/Board';
import Token, { TOKEN_STATUS } from './gamer/Token';
import GameMaster from './game/GameMaster';
import Rules from './game/Rules';
import Gamer from './gamer/Gamer';
import Game from './game/Game';
import Mind from './mind/Mind';
import PsychoLifeModule from './psyco/PsychoLifeModule';
import PsychoMovementModule from './psyco/PsychoMovementModule';
import { PsychoReproductionModule } from './psyco/PsychoReproductionModule';

class Main {
    static main(): void {
        const lifeMind = new Mind()
                        .addPsycho(new PsychoLifeModule())
                        .addPsycho(new PsychoReproductionModule())
                        .addPsycho(new PsychoMovementModule());

        const gamers = [
            new Gamer(lifeMind, new Token(TOKEN_STATUS.death)),
            new Gamer(lifeMind, new Token(TOKEN_STATUS.death)),
            new Gamer(lifeMind, new Token()),
            new Gamer(lifeMind, new Token()),
            new Gamer(lifeMind, new Token()),
        ];

        const board = new Board()
            .addRow([undefined, gamers[2].token, undefined, undefined, undefined, undefined])
            .addRow([gamers[1].token, gamers[3].token, gamers[0].token, undefined, undefined, undefined])
            .addRow([undefined, gamers[4].token, undefined, undefined, undefined, undefined]);

        new GameMaster(new Game(board, new Rules()), gamers).run();
    }
}

Main.main();
