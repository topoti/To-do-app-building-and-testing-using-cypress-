describe("My First Test", () => {
beforeEach(() => {
   cy.visit("http://127.0.0.1:5501/index.html");

   
})

it("Add tasks", () => {
   const tasks = ["Writing test 1", "Writing test 2", "Writing test 3", "Writing test 4", "Writing test 5"];
   addTasks(tasks);
function addTasks(tasks) {
   for (let i = 0; i < tasks.length; i++) {
     cy.get(".textarea").type(tasks[i]);
     cy.contains("Add Item").click();
   }
 }
  cy.get('#list').find('.itemall').should('have.length', 5) // assertion

  cy.get('.itemall').eq(0).should('contain','Writing test 1');

});


 it("should check the work done and show proper functionality", () =>{

   cy.get("h1").should("contain", "To Do List");

   const tasks = ["Writing test 1", "Writing test 2", "Writing test 3", "Writing test 4", "Writing test 5"];
   addTasks(tasks);
   function addTasks(tasks) {
   for (let i = 0; i < tasks.length; i++) {
     cy.get(".textarea").type(tasks[i]);
     cy.contains("Add Item").click();
      }
   }   
    cy.get(".fas.fa-check").eq(2).click();

    //cy.get(".fas.fa-trash").click();

    cy.get("#allButton").click();
    cy.wait(2000);
    cy.get('#list').find('.itemall').should('have.length', 5)

    cy.get("#activeButton").click();
    cy.wait(2000);
    cy.get('#list').find('.itemall').should('have.length', 4)

    cy.get("#completeButton").click();
    cy.wait(2000);
    cy.get('#list').find('.itemall').should('have.length', 1)

    cy.get("#clearButton").click();
 })

 it("should delete the work and show proper functionality", () =>{

   cy.get("h1").should("contain", "To Do List");

   const tasks = ["Writing test 1", "Writing test 2", "Writing test 3", "Writing test 4", "Writing test 5"];
   addTasks(tasks);
   function addTasks(tasks) {
   for (let i = 0; i < tasks.length; i++) {
     cy.get(".textarea").type(tasks[i]);
     cy.contains("Add Item").click();
      }
   }   
    cy.get(".fas.fa-trash").eq(1).click();

    cy.get("#allButton").click();
    cy.wait(2000);
    cy.get('#list').find('.itemall').should('have.length', 4)

    cy.get("#activeButton").click();
    cy.wait(2000);
    cy.get('#list').find('.itemall').should('have.length', 4)

    cy.get("#completeButton").click();
    cy.wait(2000);
    cy.get('#list').find('.itemall').should('have.length', 0)

    cy.get("#clearButton").click();
 })

})