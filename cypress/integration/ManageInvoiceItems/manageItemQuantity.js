import {Given} from "cypress-cucumber-preprocessor/steps"

Given('there are {string} units of an item at {string} each', (quantity, value) => {
    cy.get('[aria-label="quantity"]').clear().type(quantity);
    cy.get('[aria-label="price"]').clear().type(value);
});

When('I change the item quantity to {string}', (nextQuantity) => {
    cy.get('[aria-label="quantity"]').clear().type(nextQuantity);
});