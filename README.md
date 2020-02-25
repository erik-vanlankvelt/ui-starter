# ui-starter

UI React web application starter project.

## Overview

Technologies Used:

-   [Babel](https://github.com/babel/babel) - JavaScript compiler
-   [Webpack](https://github.com/webpack/webpack) - Module bundler for assets
-   [React](https://github.com/facebook/react) - JavaScript library for UIs
-   [Sass](https://github.com/sass/sass) - CSS preprocessing
-   [Jest](https://github.com/facebook/jest), [Enzyme](https://github.com/airbnb/enzyme) - JavaScript testing
-   [ESLint](https://github.com/eslint/eslint), [Prettier](https://github.com/prettier/prettier) - Linting and formatting
-   [Husky](https://github.com/typicode/husky) - Git hooks

## Setup

##### Install homebrew (if not done already)

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

##### Install node (if not done already)

```
brew install node
```

##### Install npm modules

```
npm install
```

## Available Scripts

In the project directory, you can run:

```
npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.

```
npm run build
```

Builds the app for production to the `dist` folder.

```
npm run test
npm run test:watch
```

Runs all tests, `:watch` will watch for changes and run tests again.

## Linting and Formatting

ESLint is run on all staged files that will be committed. ESLint and Prettier are run before each commit.
