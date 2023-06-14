import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("precondition", () => {
   //cy.visit('https://www.qantas.com/au/en/book-a-trip.html')
   cy.visit('https://www.qantas.com/au/en/book-a-trip/flights.html')
})

When("action", () => {
   // cy.get('.logo-qantas').should('be.visible')
})

Then("testable outcome", () => {
   // cy.get('.logo-qantas').should('be.visible')
})