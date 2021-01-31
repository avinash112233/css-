const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const pathToFile = path.join(__dirname , "../The-Box-Model/terminal.html");


describe("CSS Module test30  #start_test", async() => {

    it("should link reset.css as first stylesheet in the terminal.html file", async()=> {
        const dom = await createDom(pathToFile)
        const firstLink = dom.window.document.getElementsByTagName("link")[0]
        expect(firstLink.attributes.getNamedItem("href").textContent).to.be.equal("reset.css")
        expect(firstLink.attributes.getNamedItem("type").textContent).to.be.equal("text/css")
    })

    it("should contain reset.css file in The-Box-Model directory", async ()=>{
        const path_to_dir = path.join(__dirname , "../The-Box-Model")
        const files = await utils.readDir(path_to_dir)
        expect(files).to.be.includes("reset.css")
    })

});