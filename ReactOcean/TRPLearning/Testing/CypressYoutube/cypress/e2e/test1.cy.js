/// <reference types="cypress" />

it("Google Search", ()=>{
    cy.visit("https://www.google.com/");
    cy.get('.gLFyf').type("Automation Step by Step{enter}");
    cy.wait(3000);
    cy.contains("Automation Step by Step").click();
    
})