import Decision from './Decision';
import Token from '../gamer/Token';
import Board from '../game/Board';
import Rules from '../game/Rules';
import PsychoModule from '../psyco/PsychoModule';

export default class Mind {
    modules: Array<PsychoModule>;
    rules: Rules;

    constructor() {
        this.modules = [];
    }

    learnRules(rules: Rules): void {
        this.rules = rules;
    }

    takeDecisions(board: Board, token: Token): Array<Decision> {
        if (!this.rules && this.modules.length === 0) { return [new Decision(() => {})]; }
        return this.modules.map(module => {
            return module.run(board, this.rules, token);
        });
    }

    addPsycho(psycho: PsychoModule): Mind {
        this.modules.push(psycho);
        return this;
    }

    getPsychos(): Array<PsychoModule> {
        return this.modules;
    }
}
