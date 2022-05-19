When('I change the item value to {string}', (nextValue) => {
    cy.get('[aria-label="price"]').clear().type(nextValue);
});