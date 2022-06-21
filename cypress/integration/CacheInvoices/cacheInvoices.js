import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps";

const url = Cypress.env('APP_URL');
Given('I open the main page', () => {
    cy.visit(url)
})

const getInputByLabel = (label) => {
    return cy
        .contains('label', label)
        .invoke('attr', 'for')
        .then((id) => {
            cy.get('#' + id)
        })
}

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

When('No fields are filled', () => {
    cy.get('input[name="dateOfIssue"]').should("have.value", '');
    cy.get('input[name="billTo"]').should('have.value', '');
    cy.get('input[name="billToEmail"]').should('have.value', '');
    cy.get('input[name="billToAddress"]').should('have.value', '');
    cy.get('input[name="billFrom"]').should('have.value', '');
    cy.get('input[name="billFromEmail"]').should('have.value', '');
    cy.get('input[name="billFromAddress"]').should('have.value', '');
    cy.get('input[name="shipToAddress"]').should('have.value', '');
    cy.get('input[name="name"]').should('have.value', '');
    cy.get('textarea[name="notes"]').should("have.value", '');
    cy.get('input[name="taxRate"]').should('have.value', '');
    cy.get('input[name="discountRate"]').should('have.value', '');
})

When('I fill the item fields with name: {string}, description: {string}, quantity : {string} and Price: {string}', (name, description, quantity, price) => {

    cy.get('input[name="name"]').last().type(name)
    cy.get('input[name="description"]').last().type(description)
    cy.get('input[name="quantity"]').last().clear();
    cy.get('input[name="price"]').last().clear();
    cy.get('input[name="quantity"]').last().type(quantity)
    cy.get('input[name="price"]').last().type(price)
})
When('I click on the button with label {string}', (actionName) => {
    cy.get('.btn').contains(actionName).click();
})

When('I click on the button Delete Item', () => {
    cy.get('#item_0').find('#deleteItem').click();
})

When('I set the {string} button to be checked', (button) => {
    const input = getInputByLabel(button)
    input.click()
    input.should('be.checked')
})

When('I write {string} in the field {string}', (valueToWrite, field) => {
    const shipToAddress = cy.get(`input[name="${field}"]`)

    shipToAddress.type(valueToWrite)
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

Then('The item {string} fields  are filled with name: {string}, description: {string}, quantity : {string} and Price: {string}', (item, name, description, quantity, price) => {
    cy.get('input[name="name"]').eq(item - 1).should("have.value", name);
    cy.get('input[name="description"]').eq(item - 1).should("have.value", description);
    cy.get('input[name="quantity"]').eq(item - 1).should("have.value", quantity);
    cy.get('input[name="price"]').eq(item - 1).should("have.value", price);
})

Then('I see the field {string} is equal to {string}', (firstField, value) => {
    const field = cy.get(`input[name="${firstField}"]`)

    field.should('have.value', value)
})