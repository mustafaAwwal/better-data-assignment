This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
# install node_modules first if you have not installed it yed using yarn install

yarn dev # for starting development server
yarn test # for testing all components
yarn storybook # for running storybook

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result for development server.

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result for storybook.

## Understanding the project structure

Each sub heading below this represents a folder in `src/` directory and has its explanation

### Components

Contains all the building blocks for the website

### Hooks

Contains all the custom hooks required for the application

### Layouts

Contains the common skeleton between pages. For example in our case a combination of side nav and header

### Pages

This is the directory created by nextjs containing all of our components

### Stories

Contains the stories for the pages folder

### Tests

Contains all of the tests for the pages component

### Utils

Contains common utilities

## _Other folders to explain_

### Mocks folder outside src directory

This folder contains the mocks for the backend. Implemented using `msw`. Benefit of this approach are:

- No need to create expensive mocks for component tests
- No need for splitting components in data and ui because the same mocks can be used in storybooks as well

### **mocks** folder outside src directory

Containing auto mocked modules for react router. This feature is provided by jest.

## Component structure

Each component has its own folder with the main file as `index.tsx` with its corresponding test and stories with file name `index.stories.tsx` and `index.test.tsx`. The only difference is with the pages folder due to the limitation of react router.
