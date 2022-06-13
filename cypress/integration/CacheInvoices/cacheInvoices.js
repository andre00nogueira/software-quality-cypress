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

When('I refresh the page',()=>{
    cy.reload()
})

Then('The {string} field is filled with name: {string}',(type, name)=>{
    if(type==='to'){
        cy.get('.mb-5 > :nth-child(1) > input[name="billTo"]').should(
            "have.text",
            ''
        )
    }else{
        cy.get('.mb-5 > :nth-child(2) > input[name="billFrom"]').should(
            "have.text",
            ''
        )
    }

})