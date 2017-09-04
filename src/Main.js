import Board from "./game/Board";
import Token from "./game/Token";
import GameMaster from "./game/GameMaster";
import Rules from "./game/Rules";
import Gamer from "./game/Gamer";
import Game from "./game/Game";

class Main{
    static main(){
        var board = new Board()
            .addRow([undefined, new Token(), undefined, new Token(), undefined, undefined])
            .addRow([undefined, new Token(), undefined, new Token(), undefined, undefined])
            .addRow([undefined, new Token(), undefined, undefined, undefined, new Token()])
        var master = new GameMaster(new Game(board, new Rules()), [new Gamer(),new Gamer(),new Gamer(),new Gamer(),new Gamer(),new Gamer()])
        master.run();
    }
}

Main.main();