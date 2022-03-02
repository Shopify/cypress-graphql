/// <reference path="./index.d.ts" />
// Import custom commands
import {interceptGql} from './commands/intereceptGql';

// Re-export utility functions and libs
export * from './utils/aliasMutation';
export * from './utils/aliasQuery';
export * from './utils/hasOperationName';

/**
 * Register custom commands automatically
 * (this happens at the global scope by design)
 * @see https://docs.cypress.io/guides/tooling/typescript-support#Types-for-custom-commands
 **/
Cypress.Commands.add('interceptGql', interceptGql);

declare global {
  namespace Cypress {
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
          | [string, any | any]
        )[],
      ): Cypress.Chainable<undefined>;
    }
  }
}
/* eslint-enable @typescript-eslint/no-namespace */
