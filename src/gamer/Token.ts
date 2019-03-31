import { GeneticInformation } from './GeneticInformation';


 export default class Token {
    public id: any;
    public status: TOKEN_STATUS;
    private properties: any;
    geneticInformation: GeneticInformation;

    constructor(status: TOKEN_STATUS = TOKEN_STATUS.live) {
        this.id = IDGenerator.getInstance().generate();
        this.status = status;
        this.properties = {};
    }

    addProperty(name: string, value: any = undefined): void {
        this.properties[name] = value;
    }

    getPropertyValue(name: string): any {
        return this.properties[name];
    }

    setPropertyValue(name: string, value: any): void {
        this.properties[name] = value;
    }

    setGeneticInfo(geneticInfo: GeneticInformation): any {
        this.geneticInformation = geneticInfo;
    }

    public toString(): string {
        return (this.status === TOKEN_STATUS.live) ? '#' : '†';
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
