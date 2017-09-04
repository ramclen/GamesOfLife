import Board from "./game/Board";
import Token from "./game/Token";

class Main{
    static main(){
        var board = new Board()
            .addRow([undefined, new Token(), undefined, new Token(), undefined, undefined])
            .addRow([undefined, new Token(), undefined, new Token(), undefined, undefined])
            .addRow([undefined, new Token(), undefined, undefined, undefined, new Token()])
        console.log(board.toString());
    }
}

Main.main();