# `@shopify/cypress-graphql`

[![Build Status](https://github.com/Shopify/cypress-graphql/workflows/CI/badge.svg?branch=main)](https://github.com/Shopify/cypress-graphql/actions?query=workflow%3ACI)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md) [![npm version](https://badge.fury.io/js/%40shopify%2Fcypress-graphql.svg)](https://badge.fury.io/js/%40shopify%2Fcypress-graphql.svg) [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@shopify/cypress-graphql.svg)](https://img.shields.io/bundlephobia/minzip/@shopify/cypress-graphql.svg)

Cypress commands for intercepting and testing graphql endpoints.

## Installation

```bash
$ yarn add @shopify/cypress-graphql
```

## Usage

```
cy.interceptGql([
  ['StoreQuery', { statusCode: 200, body: { data: MockStoreQueryData } }],
])
```
