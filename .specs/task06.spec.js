const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const pathToFile = path.join(__dirname , "../CSS-Setup-and-Selector/index.html");


describe("CSS Module test06  #start_test", async() => {

    it("should change h1 to teal color through class", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".title")
        expect(selectorCSS["color"]).to.be.equal("teal")
    })

});