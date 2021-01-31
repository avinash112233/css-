const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const pathToFile = path.join(__dirname , "../CSS-Setup-and-Selector/index.html");


describe("CSS Module test10  #start_test", async() => {

    it("should remove #article-title selector from external stylesheet", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "#article-title")
        expect(Object.keys(selectorCSS).length).to.be.equal(0)
    })

    it("should remove article-title ID from HTML", async()=> {
        const dom = await createDom(pathToFile)
        const H1 = dom.window.document.getElementsByTagName("H1")[0]
        expect(H1.id).to.be.equal("")
    })

    it("should add .cursive selector in external stylesheet", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".cursive")
        expect(selectorCSS["font-family"]).to.be.equal("cursive")
    })

    it("should add cursive class in HTML", async()=> {
        const dom = await createDom(pathToFile)
        const H1 = dom.window.document.getElementsByTagName("H1")[0]
        expect(H1.className).to.be.includes("cursive")
    })

    it("should add .capitalize selector in external stylesheet", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".capitalize")
        expect(selectorCSS["text-transform"]).to.be.equal("capitalize")
    })

    it("should add capitalize class in HTML", async()=> {
        const dom = await createDom(pathToFile)
        const H1 = dom.window.document.getElementsByTagName("H1")[0]
        expect(H1.className).to.be.includes("capitalize")
    })

});