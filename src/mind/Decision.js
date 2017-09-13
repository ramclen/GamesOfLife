export default class Decision{
    constructor(action){
        this.actions = action? [action] : [];
    }

    add(action):Decision{
        this.actions.push(action);
        return this;
    }

    run(){
        if(this.actions.length!==0) {
            this.actions.forEach(action => action());
            this.actions = [];
        }
    }
}