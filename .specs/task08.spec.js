const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const pathToFile = path.join(__dirname , "../CSS-Setup-and-Selector/index.html");


describe("CSS Module test08  #start_test", async() => {

    it("should give h1 an id article-title", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "#article-title")
        if(Object.keys(selectorCSS).length){
            expect(selectorCSS["text-transform"]).to.be.equal("capitalize")
            expect(selectorCSS["font-family"]).to.be.equal("cursive")
        }else{
            const selectorCSScapitalize = recursive_selectors_CSSRules(newDom, ".capitalize")
            expect(selectorCSScapitalize["text-transform"]).to.be.equal("capitalize")
            const selectorCSScursive = recursive_selectors_CSSRules(newDom, ".cursive")
            expect(selectorCSScursive["font-family"]).to.be.equal("cursive")
        }
    })

});