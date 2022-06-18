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

When('I select the date {string} on calendar', (date) => {
    if (date) {
        cy.get('.mb-3 > :nth-child(1) > .flex-row > .form-control').type(date)
    }
})

When('I fill the tax rate field with value: {string}, and the discount rate field with the value: {string}', (tax, discount) => {
    cy.get('input[name="taxRate"]').type(tax);
    cy.get('input[name="discountRate"]').type(discount);
})

When('I fill the invoice number with value: {string}', (invoiceNumber) => {
    cy.get('input[name="invoiceNumber"]').clear();
    cy.get('input[name="invoiceNumber"]').type(invoiceNumber);
})
When('I fill the notes with value: {string}', (notes) => {
    cy.get('textarea[name="notes"]').type(notes);
})

Then('The {string} field is filled with name: {string}, email: {string}, address: {string}', (type, name, email, address) => {
    cy.get('input[name="bill' + type + '"]').should("have.value", name);
    cy.get('input[name="bill' + type + 'Email"]').should('have.value', email);
    cy.get('input[name="bill' + type + 'Address"]').should('have.value', address);
})


Then('The date field is filled with the date {string}', (date) => {
    cy.get('input[name="dateOfIssue"]').should("have.value", date);
})

Then('The the tax rate is filled with value: {string}, and the discount rate is filled with value: {string}', (tax, discount) => {
    cy.get('input[name="taxRate"]').should("have.value", tax);
    cy.get('input[name="discountRate"]').should("have.value", discount);
})

Then('The invoice number is filled with the value {string}', (invoiceNumber) => {
    cy.get('input[name="invoiceNumber"]').should("have.value", invoiceNumber);
})

Then('The notes is filled with the value {string}', (notes) => {
    cy.get('textarea[name="notes"]').should("have.value", notes);
})