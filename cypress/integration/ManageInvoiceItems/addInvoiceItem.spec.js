import {Given} from "cypress-cucumber-preprocessor/steps"

const url = Cypress.env('APP_URL');

Given('I open the main page', () => {
    cy.visit(url);
})

When('I click on the button with label {string}', (actionName) => {
    cy.get('.btn').contains(actionName).click();
})

Then('a new empty item is created', () => {
    const items = cy.get('[id^=item_]');
    items.should('have.length', 2);

    const newItem = items.eq(1);

    newItem
        .get('[aria-label="name"]')
        .should('have.attr', 'placeholder', 'Item name');
    newItem
        .get('[aria-label="description"]')
        .should('have.attr', 'placeholder', 'Item description');
})

And('the total price should be {string}', (total) => {
    cy.get('#totalPrice').contains(total)
});