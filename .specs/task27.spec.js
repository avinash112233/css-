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


describe("CSS Module test27  #start_test", async() => {

    it("should add width of .pull-quote class  in external stylesheet", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".pull-quote")
        expect(selectorCSS["width"]).to.be.equal("350px")
    })

    it("should add margin of .pull-quote class in external stylesheet", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".pull-quote")
        expect(selectorCSS["margin"]).to.be.equal("0 auto")
    })

    it("should add margin to main ID in external stylesheet", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "#main")
        expect(selectorCSS["margin"]).to.be.equal("0 auto")
    })

});