[![Build Status](https://travis-ci.com/rzgry/Express-REST-API-Template.svg?branch=master)](https://travis-ci.com/rzgry/Express-REST-API-Template)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Blazing Fast](https://img.shields.io/badge/speed-blazing%20%F0%9F%94%A5-brightgreen.svg)](https://twitter.com/acdlite/status/974390255393505280)

# Express-Boilerplate

Simple express boilerplate based off of [express-generator](https://expressjs.com/en/starter/generator.html). Includes eslint and prettier for code formatting, Nodemon for automatic server restarting, and Jest for testing.

## Setting up VS Code Development Environment

Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) vscode extensions

Add the following to your vscode settings

```
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
```

## Getting Started

Install dependencies

```
npm install
```

Running in development

```
npm run dev
```

Running in production

```
npm start
```

Running tests / linting

```
npm test

npm run lint
```
