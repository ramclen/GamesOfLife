import PsychoModule from "./PsychoModule";
import Decision from "../mind/Decision";

export default class PsychoLifeModule extends PsychoModule {

    _run(board, rules, token){
        let tokenStatus = rules.giveTokenStatus(token, board);
        return new Decision( ()=> token.status = tokenStatus );
    }
}