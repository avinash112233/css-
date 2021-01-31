const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "CSS-Display-and-Positioning"
const pathToFile = path.join(__dirname , "../CSS-Display-and-Positioning/survey.html");


describe("CSS Module test36  #start_test", async() => {

    it(`should add opening and closing <strong></strong> tags around “Welcome”`, async()=> {
        const dom = await createDom(pathToFile)
        const strong = dom.window.document.getElementsByTagName("STRONG")[0]
        expect(strong.textContent).to.be.equal("Welcome")
    })

});