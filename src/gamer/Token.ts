

 export default class Token {
    public id: any;
    public status: TOKEN_STATUS;

    constructor(status: TOKEN_STATUS = TOKEN_STATUS.live) {
        this.id = IDGenerator.getInstance().generate();
        this.status = status;
    }

    public toString(): string {
        return (this.status === TOKEN_STATUS.live) ? '#' : 'T';
    }

}

export enum TOKEN_STATUS {
    death = 'death',
    live = 'live'
}

class IDGenerator {
    private static instance: IDGenerator;
    private _id: number = 0;

    static getInstance(): IDGenerator {
        if (!this.instance) {
            this.instance = new IDGenerator();
        }
        return this.instance;
    }

    private constructor() {}

    generate(): number {
        return this._id++;
    }
}
