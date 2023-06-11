# Next JS 13 + Ant Design 5.0 Starter Project

Ini adalah starter project Next JS berisi 13 dengan Antdesign versi 5.

## Authors

- [@joesopeh](https://www.github.com/joesoeph)

## Features

- Ready to user starter project
- Basic posts CRUD

## Folder Structure

- your-project
  - public/
  - src/
    - app/
      - components
      - lib
      - home/
        - page.js
        - components/
        - lib/
      - about/
        - page.js
        - components/
        - lib/
  - test/

## Installation

**System Requirements**:

- Node JS 16.8 or latest

**Step to installation**:

- Clone this repo
- Run `npm install` to installing all package
- Run `npm run dev` to running next js app
- Run `npm run server-mock` to running json mock server

# Testing

This project support testing using cypress and jest. Cypress test used for component testing and E2E testing. Jest test used for unit testing, for example when you create individual javascript helper. To run test, you can use these commands:

- npm run test (for unit test)
- npm run cy:run (for component test)
- npm run cy:open (for E2E test using cypress browser)
