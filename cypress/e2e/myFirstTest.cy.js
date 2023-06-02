describe("My First Test", () => {
 it("test1", () =>{

    //test case
    // cy.get("textarea")
    // .type("my first test");
    
    cy.get("h1")
    .should("contain", "To Do List");

 })
})