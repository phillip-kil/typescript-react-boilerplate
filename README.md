# typescript-react-boilerplate
Starter code for React projects written in TypeScript.

# Prerequisites

This project uses Yarn (https://yarnpkg.com/lang/en/) as package manager, follow the instructions on their website to install. To get consistent installs across different environments I recommend using Yarn (which uses the `yarn.lock` to resolve exact dependencies), but using NPM will work fine as well.

# Usage

1. Navigate to the root folder of this project in your terminal and run `yarn install` to install all the necessary project dependencies.
1. Run `yarn dev` to start a local development server with Hot Module Replacement.
1. When adding CSS classes the type definitions can be generated running `yarn tcm`. This command will basically create a `.d.ts` equivalent of every CSS file in the `src` folder.
1. To bundle the application you can run `yarn bundle`, which will create the `dist` folder with all the transpiled files.
1. This boilerplate project comes with TSLint, using the recommended TSLint rules for React and a few opinionated custom rules. Using a linter makes sure you have a consistent coding style when developing with multiple people on a project. To follow the recommended style guides run `yarn tslint` to get feedback of what needs to be adjusted. Most of the rules can actually be fixed automatically, therefore run `yarn tslintFix` to resolve all auto fixable recommendations.
