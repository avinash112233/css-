const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "CSS-Display-and-Positioning"
const pathToFile = path.join(__dirname , "../CSS-Display-and-Positioning/survey.html");


describe("CSS Module test38  #start_test", async() => {

    it("should set display of li element to inline-block", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "li")
        expect(selectorCSS["display"]).to.be.equal("inline-block")
    })

    it("should set width of li element to 18px", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "li")
        expect(selectorCSS["width"]).to.be.equal("80px")
    })

    it("should offset the “Welcome” section by 50 pixels from the top", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".welcome")
        expect(selectorCSS["top"]).to.be.equal("50px")
    })

    it("should set display of answer class to inline-block", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".answer")
        expect(selectorCSS["display"]).to.be.equal("inline-block")
    })

});