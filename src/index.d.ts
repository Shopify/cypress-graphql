/// <reference types="cypress" />


/**
 * Augment Cypress's interfaces so they include typings for custom commands
 * @see https://docs.cypress.io/guides/tooling/typescript-support#Types-for-custom-commands
 */
/* eslint-disable @typescript-eslint/no-namespace */
declare namespace Cypress {
  interface Chainable<Subject> {
    //
    /**
     * interceptGql will log and intercept GQL queries/mutations based on the operationname
     * Said requests can be awaited and their responses may be tested like any cypress route
     * @see https://docs.cypress.io/api/commands/intercept
     * @future If this works well, add as package for https://github.com/Shopify/quilt
     * @param knownOperations list of known queries/mutations (plus response intercepts, if needed)
     */
    interceptGql(
      graphqlApiUrl: string,
      knownOperations: (
        | string
        // | [string, StaticResponse | HttpResponseInterceptor]
        | [string, any | any]
      )[],
    ): Cypress.Chainable<undefined>;
  }
}
/* eslint-enable @typescript-eslint/no-namespace */
