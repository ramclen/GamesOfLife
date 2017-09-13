import Mind from "../src/mind/Mind";
import {expect} from "chai";
import Decision from "../src/mind/Decision";

describe("Mind", function () {
    var mind: Mind;

    beforeEach(function () {
        mind = new Mind();
    })

    it("should be able to take decision", function () {
        expect(mind.takeDecisions()).to.be.an.instanceof(Decision);
    })

    it("could be injected a new psyco module", function () {
        mind.addPsyco(new LifeModule())
            .addPsyco(new MovementModule());
        expect(mind.getPsycos().length).to.equal(2)
    })
});

