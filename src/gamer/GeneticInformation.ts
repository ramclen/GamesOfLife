import Token from './Token';
import PsychoModule from 'src/psyco/PsychoModule';

export class GeneticInformation {
    mindStructure: PsychoModule[];

    constructor(mindStructure: PsychoModule[]) {
        this.mindStructure = mindStructure;
    }

}
