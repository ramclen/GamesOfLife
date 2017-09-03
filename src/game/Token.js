export default class Token {
    constructor(){
        this.id = idGenerator.getInstance().generate();
    }
}




let _singleton = Symbol();
class idGenerator {

    constructor(singletonToken){
        if (_singleton !== singletonToken) throw new Error('Cannot instantiate directly.');
        this._id = 0;
    }

    static getInstance(){
        if(!this._instance)
            this._instance = new idGenerator(_singleton);
        return this._instance;
    }

    generate(){
        return this._id++;
    }
}