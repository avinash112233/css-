const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "Coffee"
const pathToFile = path.join(__dirname , "../Coffee/coffee.html");


describe("CSS Module test43  #start_test", async() => {

    it("find the hex value #444444 and change it to rgb(68, 68, 68)", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "p")
        expect(selectorCSS["color"]).to.be.equal("rgb(68, 68, 68)")
    })

    it("find the hex value #214E34 and change it to rgb(33, 78, 52)", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "a")
        expect(selectorCSS["color"]).to.be.equal("rgb(33, 78, 52)")
    })

    it("find the hex value #E4BB97 and change it to rgb(228, 187, 151)", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "li")
        expect(selectorCSS["border-bottom"].endsWith("rgb(228, 187, 151)")).to.be.equal(true)
    })

});