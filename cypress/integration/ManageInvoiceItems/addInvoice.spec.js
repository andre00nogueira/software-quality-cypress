import {Given} from "cypress-cucumber-preprocessor/steps"

const url = 'http://localhost:3000/'

Given('I open the main page', () => {
    cy.visit(url);
})

When('I click on the button with label {string}', (actionName) => {
    cy.get('.btn').contains(actionName).click();
})

Then('a new empty item is created', () => {
    cy.get('[id^=item_]').should('have.length', 2);
})

And('the total price should be {string}', (total) => {
    cy.get('#totalPrice').contains(total)
});