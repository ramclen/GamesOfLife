import PsychoModule from "./PsychoModule";
import Decision from "../mind/Decision";

export default class PsychoMovementModule extends PsychoModule{

    _run(board, rules, token):Decision{
        return new Decision(()=> {
            var [x,y] = board.getTokenCoordinates(token);
            try {
                board.move(token, [x,y+1]);
            }catch (e){

            }

        });
    }
}