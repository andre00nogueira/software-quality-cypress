And('I have at least one item', () => {
    cy.get('[id^=item_]').should('have.length', 1);
})

When('I click on the button Delete Item', () => {
    cy.get('#item_0').find('#deleteItem').click();
})

Then('the selected item is removed from the list', () => {
    cy.get('#item_0').should('not.exist');
})