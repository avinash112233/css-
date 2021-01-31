const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "Coffee"
const pathToFile = path.join(__dirname , "../Coffee/coffee.html");


describe("CSS Module test44  #start_test", async() => {

    it("should apply #bd2a9d color to h3 heading in external stylesheet", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "h3")
        expect(selectorCSS["color"]).to.be.equal("#bd2a9d")
    })

});