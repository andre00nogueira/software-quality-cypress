import {Given} from "cypress-cucumber-preprocessor/steps";

const url = Cypress.env('APP_URL');
Given('I open the main page', () => {
    cy.visit(url)
})


When('I fill bill {string} fields with name: {string}, email: {string}, address: {string}', (type, name, email, address) => {
    if(name){
        cy.get('[placeholder="Who is this invoice ' + type + '?"]').type(name)
    }
    if (type === 'to') {
        if(email){
            cy.get(':nth-child(1) > [placeholder="Email address"]').type(email)
        }
        if(address){

            cy.get(':nth-child(1) > [placeholder="Billing address"]').type(address)
        }
    } else {
        if(email){
            cy.get(':nth-child(2) > [placeholder="Email address"]').type(email)
        }
        if(address){
            cy.get(':nth-child(2) > [placeholder="Billing address"]').type(address)
        }
    }
})

When('I select the date {string} on calendar', (date) => {
    if(date){
        cy.get('.mb-3 > :nth-child(1) > .flex-row > .form-control').type(date)
    }
})

When('I fill the item fields with name: {string} and description: {string}', (name, description) => {
    if(name){
        cy.get('[style="width: 100%;"] > :nth-child(1) > .form-control').last().type(name)
    }
    if(description){
        cy.get('[style="width: 100%;"] > :nth-child(2) > .form-control').last().type(description)
    }
})

When('I click on {string} button',(name)=>{
    cy.contains(name,{ timeout: 10000 }).click()
})

Then('A PDF with invoice is downloaded',()=>{
    cy.readFile("cypress/downloads/invoice-001.pdf")
})

Then('A warning is shown',()=>{
    cy.contains('Please fill in this field',{ timeout: 10000 })
})

Then('There are {string} missing or invalid parameters',(string)=>{
    cy.get('input:invalid').should('have.length', string)
})

And('I have no downloaded files',()=>{
    cy.exec('rm -rf cypress/downloads/* || true')
})