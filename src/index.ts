/// <reference types="cypress" />

// eslint-disable-next-line no-warning-comments
// TODO: fix tsconfig setup so the following can be imported
// import {
//   StaticResponse,
//   HttpResponseInterceptor,
// } from 'cypress/types/net-stubbing';

// Import custom commands
import {interceptGql} from './commands/intereceptGql';

// Re-export utility functions and libs
export * from './utils/aliasMutation';
export * from './utils/aliasQuery';
export * from './utils/hasOperationName';

/**
 * register custom commands automatically
 * (this happens at the global scope by design)
 * @see https://docs.cypress.io/guides/tooling/typescript-support#Types-for-custom-commands
 **/
Cypress.Commands.add('interceptGql', interceptGql);

/**
 * Augment Cypress's interfaces so they include typings for custom commands
 * @see https://docs.cypress.io/guides/tooling/typescript-support#Types-for-custom-commands
 */
