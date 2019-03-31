import { DecisionEvent } from './DecisionEvent';

export default class Decision {
    actions: Function[];

    constructor(action: Function) {
        this.actions = action ? [action] : [];
    }

    add(action: Function): Decision {
        this.actions.push(action);
        return this;
    }

    run(): DecisionEvent[] {
        if (this.actions.length !== 0) {
            const events: DecisionEvent[] = this.actions.map(action => action());
            this.actions = [];
            return events;
        }
        return undefined;
    }
}
