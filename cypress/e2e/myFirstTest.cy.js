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
     cy.wait(1000);
   }
 }
  cy.get('#list').find('.itemall').should('have.length', 5) // assertion

  //expect($item.get(0).textContent, 'first item').to.equal('Writing test 1');

});


//  it("test1", () =>{
//    cy.get("h1").should("contain", "To Do List");

   
   //  cy.get(".fas.fa-check").click();

   //  //cy.get(".fas.fa-trash").click();

   //  cy.get("#allButton").click();
   //  cy.wait(2000);

   //  cy.get("#activeButton").click();
   //  cy.wait(2000);

   //  cy.get("#completeButton").click();
   //  cy.wait(2000);

   //  cy.get("#clearButton").click();
//  })


//  it("test2", () =>{

//    cy.visit("http://127.0.0.1:5501/index.html");

//    cy.get(".textarea").type("Execute test");

//    cy.contains("Add Item").click();


// })
})