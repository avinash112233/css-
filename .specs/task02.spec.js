const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const pathToFile = path.join(__dirname , "../CSS-Setup-and-Selector/index.html");


describe("CSS Module test02  #start_test", async() => {

    it("should not contain inline styling", async()=> {
        const dom = await createDom(pathToFile)
        const p = dom.window.document.getElementsByTagName("p")[0]
        expect(p.getAttributeNames().includes("style")).to.be.equal(false)
    })

  it("should contain internal styling", async () => {
  
    const dom = await createDom(pathToFile)
    const p = dom.window.document.getElementsByTagName("p")[0]
    let computedStyle = dom.window.getComputedStyle(p)
    if(computedStyle['fontFamily'])
    expect(computedStyle['fontFamily']).to.be.equal("Arial")
    else{
        
        const newDom = await load_dom_with_external_stylesheet(dom)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "p")
        expect(selectorCSS["font-family"]).to.be.equal("Arial")

    }
    
  });

});