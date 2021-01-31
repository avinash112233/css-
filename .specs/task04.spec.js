const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const pathToFile = path.join(__dirname , "../CSS-Setup-and-Selector/index.html");


describe("CSS Module test04  #start_test", async() => {
    
  it("should contain external styling", async () => {
  
    const dom = await createDom(pathToFile)
    const newDom = await load_dom_with_external_stylesheet(dom)
    const selectorCSS = recursive_selectors_CSSRules(newDom, "p")
    expect(selectorCSS["font-family"]).to.be.equal("Arial")
    
  });

});