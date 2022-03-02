context('cy.interceptGql', () => {
  // Set up a mock graphql endpoint using a normal cypress route interceptor
  beforeEach(() => {
    cy.intercept('POST', '**/api/graphql', { data: 'Default response body' }).as('MockAPI')
  })

  describe('registering the command', () => {
    it('should register the command automatically', () => {
      cy.wrap(cy.interceptGql)
        .should('not.be.undefined')
        .and('be.a', 'function');
    });
  });

  describe('spying on requests (no modifications)', () => {
    beforeEach(() => {
      // Intercept requests to /api/graphql
      cy.interceptGql('**/api/graphql', ['TestQuery', 'TestMutation'])
      // Visit the example app, which is a page that will trigger a query and mutation
      cy.visit('cypress/pages/index.html');
    });

    it('should be able to spy on graphql calls in general', () => {
      cy.wait('@GraphQL');
    });

    it('should be able to spy on a specific operation', () => {
      cy.wait('@TestQuery')
        .wait('@TestMutation');
    });

    it('should be able to stub a specific operation', () => {
      cy.wait('@TestQuery')
        .wait('@TestMutation');
    });
  });

  describe('stubbing requests (providing a response)', () => {
    beforeEach(() => {
      // Stub requests for this endpoint
      cy.interceptGql('**/api/graphql', [
        ['TestQuery', { statusCode: 200, body: { data: 'Intercepted Query!' } }],
        ['TestMutation', { statusCode: 200, body: { data: 'Intercepted Mutation!' } }]
      ])
      cy.visit('cypress/pages/index.html');
    });

    it('requests will receive a stub response if provided', () => {
      cy.wait('@TestQuery')
        .its('response.body.data').should('eq', 'Intercepted Query!');
      cy.wait('@TestMutation')
        .its('response.body.data').should('eq', 'Intercepted Mutation!');
    });
  });
});
