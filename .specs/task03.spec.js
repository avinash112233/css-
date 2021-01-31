const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const pathToFile = path.join(__dirname , "../CSS-Setup-and-Selector/index.html");


describe("CSS Module test03  #start_test", async() => {

    it("should contain styelsheet.css file in CSS-Setup-and-Selector directory", async ()=>{
        const path_to_dir = path.join(__dirname , "../CSS-Setup-and-Selector")
        const files = await utils.readDir(path_to_dir)
        expect(files).to.be.includes("stylesheet.css")
    })

    it("should not contain inline styling", async()=> {
        const dom = await createDom(pathToFile)
        const p = dom.window.document.getElementsByTagName("p")[0]
        expect(p.getAttributeNames().includes("style")).to.be.equal(false)
    })

  it("should not contain internal styling", async () => {
  
    const dom = await createDom(pathToFile)
    const style = dom.window.document.getElementsByTagName("style")
    expect(style.length).to.be.equal(0)
    
  });

});