const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "Coffee"
const pathToFile = path.join(__dirname , "../Coffee/coffee.html");


describe("CSS Module test42  #start_test", async() => {

    it("should set named color DarkSeaGreen to its hex value, #8FBC8F", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".green")
        expect(selectorCSS["background-color"]).to.be.equal("#8FBC8F")
    })

    it("should change color from Sienna to #A0522D", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".light")
        expect(selectorCSS["background-color"]).to.be.equal("#A0522D")
    })

    it("should change color from SaddleBrown to #8B4513", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".city")
        expect(selectorCSS["background-color"]).to.be.equal("#8B4513")
    })

    it("should change color from Brown to #A52A2A", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".vienna")
        expect(selectorCSS["background-color"]).to.be.equal("#A52A2A")
    })

    it("should change color from Black to #000000", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".italian")
        expect(selectorCSS["background-color"]).to.be.equal("#000000")
    })

});