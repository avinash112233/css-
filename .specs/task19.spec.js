const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const selector_CSSRules = utils.selectors_CSSRules
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "CSS-Visual-Rules"
const pathToFile = path.join(__dirname , "../CSS-Visual-Rules/tracker.html");


describe("CSS Module test19  #start_test", async() => {

    it("should add color to .caption selector in external stylesheet", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".caption")
        expect(selectorCSS["color"]).to.be.equal("#fff")
    })

    it("should add backgroud-color to p selector in external stylesheet", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".caption")
        expect(selectorCSS["background-color"]).to.be.equal("#2a2a2a")
    })

});