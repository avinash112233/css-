const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const { TIMEOUT } = require("dns");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const selector_CSSRules = utils.selectors_CSSRules
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "The-Box-Model"
const pathToFile = path.join(__dirname , "../The-Box-Model/terminal.html");


describe("CSS Module test29  #start_test", async() => {
    
    it("should add height of main ID in external stylesheet", async function(){
        this.timeout(5000)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "#main")
        expect(selectorCSS["height"]).to.be.equal("1000px")
    })

    it("should add overflow of main ID in external stylesheet", async function(){
        this.timeout(5000)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "#main")
        expect(selectorCSS["overflow"]).to.be.equal("scroll")
    })

});