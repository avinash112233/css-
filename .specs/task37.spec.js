const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "CSS-Display-and-Positioning"
const pathToFile = path.join(__dirname , "../CSS-Display-and-Positioning/survey.html");


describe("CSS Module test37  #start_test", async() => {

    it("should add footer element at the bottom of HTML page before closing body", async()=> {
        const dom = await createDom(pathToFile)
        const body = dom.window.document.getElementsByTagName("BODY")[0]
        expect(body.lastElementChild.nodeName).to.be.equal("FOOTER")
    })

    it("should add h3 heading inside footer element", async()=> {
        const dom = await createDom(pathToFile)
        const footer = dom.window.document.getElementsByTagName("FOOTER")[0]
        expect(footer.children.item(0).nodeName).to.be.equal("H3")
    })

    it("should add content in H3 heading", async()=> {
        const dom = await createDom(pathToFile)
        const footer = dom.window.document.getElementsByTagName("FOOTER")[0]
        expect(footer.children.item(0).textContent).to.be.equal("Thanks for taking our survey!")
    })

});