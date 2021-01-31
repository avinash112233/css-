const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const selector_CSSRules = utils.selectors_CSSRules
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "The-Box-Model"
const pathToFile = path.join(__dirname , "../The-Box-Model/terminal.html");


describe("CSS Module test26  #start_test", async() => {

    it("should add top margin to paragraph in external stylesheet", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "p")
        expect(selectorCSS["margin-top"]).to.be.equal("60px")
    })

    it("should add margin to (.share a) selector in external stylesheet", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".share a")
        expect(selectorCSS["margin"]).to.be.equal("10px")
    })

    it("should add margin to h2 heading in external stylesheet", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "h2")
        expect(selectorCSS["margin"]).to.be.equal("30px 20px")
    })

});