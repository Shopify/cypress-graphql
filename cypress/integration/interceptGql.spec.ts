context('cy.interceptGql', () => {
  describe('registering the command', () => {
    it('should register the command automatically', () => {
      cy.wrap(cy.interceptGql)
        .should('not.be.undefined')
        .and('be.a', 'function');
    });
  });

  describe('usage', () => {
    beforeEach(() => {
      // Intercept requests to /api/graphql
      cy.interceptGql('**/api/graphql', ['TestQuery', 'TestMutation'])
        // Visit the example app, which is a page that will trigger a query and mutation
        .visit('cypress/pages/index.html');
    });

    it('should be able to intercept graphql calls in general', () => {
      cy.wait('@GraphQL');
    });

    it('should be able to intercept a specific operation', () => {
      cy.wait('@TestQuery')
        .wait('@TestMutation');
    });
  });
});
