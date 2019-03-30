export default class Decision {
    actions: Function[];

    constructor(action: Function) {
        this.actions = action ? [action] : [];
    }

    add(action: Function): Decision {
        this.actions.push(action);
        return this;
    }

    run(): void {
        if (this.actions.length !== 0) {
            this.actions.forEach(action => action());
            this.actions = [];
        }
    }
}
