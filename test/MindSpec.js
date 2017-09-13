import Mind from "../src/mind/Mind";
import {expect} from "chai";
import Decision from "../src/mind/Decision";
import PsychoLifeModule from "../src/psyco/PsychoLifeModule";
import PsychoMovementModule from "../src/psyco/PsychoMovementModule";

describe("Mind", function () {
    var mind: Mind;

    beforeEach(function () {
        mind = new Mind();
    })

    it("should be able to take decision", function () {
        expect(mind.takeDecisions()).to.be.an.instanceof(Decision);
    })

    it("could be injected a new psyco module", function () {
        mind.addPsycho(new PsychoLifeModule())
            .addPsycho(new PsychoMovementModule());
        expect(mind.getPsychos().length).to.equal(2)
    })
});

