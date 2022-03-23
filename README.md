# `@shopify/cypress-graphql`

[![Build Status](https://github.com/Shopify/cypress-graphql/workflows/CI/badge.svg?branch=main)](https://github.com/Shopify/cypress-graphql/actions?query=workflow%3ACI)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md) [![npm version](https://badge.fury.io/js/%40shopify%2Fcypress-graphql.svg)](https://badge.fury.io/js/%40shopify%2Fcypress-graphql.svg) [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@shopify/cypress-graphql.svg)](https://img.shields.io/bundlephobia/minzip/@shopify/cypress-graphql.svg)

Cypress commands for intercepting and testing graphql endpoints.

## Installation

Install this package w/ npm or yarn

```bash
npm install --dev @shopify/cypress-graphql
yarn add --dev @shopify/cypress-graphql
```

Then in your cypress/support/index files, import the entire package to register these commands.

```
import '@shopify/cypress-graphql';
```

Typescript types are automatically included, so no further action is required.

## Usage

### `cy.interceptGql`

This command sets up spies and stubs for a graphql endpoint, similar to [cypress route intercepts](https://docs.cypress.io/api/commands/intercept#Syntax). This registers a top-level route alias called `GraphQL`. Optionally, but definitely encouraged is providing an array of known operations, which will then be registered as sub-operations with their own aliases.

#### Intercept any request

```
cy.interceptGql('**/graphql')                         // register route intercepts
cy.get('button[type="submit"]').click()               // make the UI send a request
cy.wait('@GraphQL').its('status').should('eq', 200)   // test the response
```

#### Intercept a specific operation

```
cy.interceptGql('**/graphql', ['UserQuery'])          // register route intercepts
cy.get('button[type="submit"]').click()               // make the UI send a request
cy.wait('@UserQuery').its('status').should('eq', 200) // test the response
```

#### Stub a specific operation

```
cy.interceptGql('**/graphql', [
  ['UserQuery', { statusCode: 400, body: { data: null, errors: ['fake err']  } }]
])                                                    // provide a fake error
cy.get('button[type="submit"]').click()               // make the UI send a request
cy.wait('@UserQuery').its('status').should('eq', 400) // test the response

```
