describe("My First Test", () => {
 it("test1", () =>{

    //test case
    cy.visit("http://127.0.0.1:5501/index.html");
    cy.get("h1")
    .should("contain", "To Do List");

    cy.get(".textarea") 
    .type("my first test");

    cy.contains("Add Item").click();

 })


})