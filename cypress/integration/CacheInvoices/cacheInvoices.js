import {Given} from "cypress-cucumber-preprocessor/steps";

const url = Cypress.env('APP_URL');
Given('I open the main page', () => {
    cy.visit(url)
})


When('I fill bill {string} fields with name: {string}, email: {string}, address: {string}', (type, name, email, address) => {
    if (name) {
        cy.get('[placeholder="Who is this invoice ' + type + '?"]').type(name)
    }
    if (type === 'to') {
        if (email) {
            cy.get(':nth-child(1) > [placeholder="Email address"]').type(email)
        }
        if (address) {

            cy.get(':nth-child(1) > [placeholder="Billing address"]').type(address)
        }
    } else {
        if (email) {
            cy.get(':nth-child(2) > [placeholder="Email address"]').type(email)
        }
        if (address) {
            cy.get(':nth-child(2) > [placeholder="Billing address"]').type(address)
        }
    }
})

When('I refresh the page', () => {
    cy.reload()
})

Then('The {string} field is filled with name: {string}, email: {string}, address: {string}', (type, name, email, address) => {
    cy.get('input[name="bill' + type + '"]').should("have.value", name);
    cy.get('input[name="bill' + type + 'Email"]').should('have.value', email);
    cy.get('input[name="bill' + type + 'Address"]').should('have.value', address);
})