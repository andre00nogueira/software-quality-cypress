import { Given } from "cypress-cucumber-preprocessor/steps";

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

When('The page is loaded', () => {
    cy.get('button').contains('Review Invoice')
})

Then('I see the {string} button is not checked',(button)=>{
    const input = getInputByLabel(button)
    input.should('not.be.checked')
})

And('all the fields of the billing address are not readonly', () => {
    const billingFromAddress = cy.get('input[name="billToAddress"]')
    billingFromAddress.should('not.have.attr', 'readonly', 'readonly')
})