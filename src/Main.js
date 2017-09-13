import Board from "./game/Board";
import Token from "./gamer/Token";
import GameMaster from "./game/GameMaster";
import Rules from "./game/Rules";
import Gamer from "./gamer/Gamer";
import Game from "./game/Game";
import Mind from "./mind/Mind";
import PsychoLifeModule from "./psyco/PsychoLifeModule";
import PsychoMovementModule from "./psyco/PsychoMovementModule";

class Main{
    static main(){
        var lifeMind = new Mind()
                        .addPsycho(new PsychoLifeModule())
                        .addPsycho(new PsychoMovementModule());

        var gamers = [
            new Gamer(lifeMind, new Token(Token.status.death)),
            new Gamer(lifeMind, new Token(Token.status.death)),
            new Gamer(lifeMind, new Token()),
            new Gamer(lifeMind, new Token()),
            new Gamer(lifeMind, new Token()),
        ];

        var board = new Board()
            .addRow([undefined, gamers[2].token, undefined, undefined, undefined, undefined])
            .addRow([gamers[1].token, gamers[3].token, gamers[0].token, undefined, undefined, undefined])
            .addRow([undefined, gamers[4].token, undefined, undefined, undefined, undefined])

        new GameMaster(new Game(board, new Rules()), gamers).run();
    }
}

Main.main();