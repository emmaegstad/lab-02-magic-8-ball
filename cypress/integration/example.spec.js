
describe('Example Test', () => {
    before(() => {
        cy.visit('/');
    });

    describe('answer appears when button is clicked', () => {
        it('displays answer when button is clicked', () => {
            cy.get('.question-button').click();
            cy.get('.answer').should('be.visible');
        });
    });
});