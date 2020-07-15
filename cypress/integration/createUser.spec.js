context('create user', () => {
    beforeEach(() => {
        cy.visit('localhost:3000')
    })

    it('create user', () => {
        const randomNumberString = Cypress._.random(0, 1e6).toString();
        cy.get('[data-testid=firstName]').type('tester');
        cy.get('[data-testid=lastName]').type('tester lastname');
        cy.get('[data-testid=email]').type(`tester@${randomNumberString}.com`);
        cy.get('[data-testid=password]').type('1234');
        cy.get('[data-testid=description]').type('I love to do E2E testing!');

        cy.get('[data-testid=submit]').click();

        cy.get('[data-testid=email]').should($emailField => {
            expect($emailField).to.not.contain('Email is either invalid or taken')
        })
    })
})