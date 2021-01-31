const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "Coffee"
const pathToFile = path.join(__dirname , "../Coffee/coffee.html");


describe("CSS Module test41  #start_test", async() => {

    it("should set the foreground color of the h1 heading to MidnightBlue", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "h1")
        expect(selectorCSS["color"].toLowerCase()).to.be.equal("midnightblue")
    })

    it("should set the background color of the h1 heading to aqua", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "h1")
        expect(selectorCSS["background-color"].toLowerCase()).to.be.equal("aqua")
    })

});