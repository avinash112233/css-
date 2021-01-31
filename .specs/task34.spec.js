const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "CSS-Display-and-Positioning"
const pathToFile = path.join(__dirname , "../CSS-Display-and-Positioning/survey.html");


describe("CSS Module test34  #start_test", async() => {

    it("should set position of header to fixed", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "header")
        expect(selectorCSS["position"]).to.be.equal("fixed")
    })

    it("should set header width to 100%", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "header")
        expect(selectorCSS["width"]).to.be.equal("100%")
    })

    it("should position .welcome selector to relative", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".welcome")
        expect(selectorCSS["position"]).to.be.equal("relative")
    })

});