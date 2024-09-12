# 1. Getting Started

To start developing with this project, clone the repository and install the dependencies as outlined in the Installation section.
# Prerequisites
- Node.js (>=20.x)
- Yarn or npm (Yarn is preferred)
- TypeScript

# 2. Project Structure
````
src/
│
├── assets/                 # Static assets like images, fonts, etc.
├── components/             # Reusable components (Atoms, Molecules, Organisms)
│   ├── base/               # Basic building blocks (buttons, inputs, labels, etc.)
│   ├── molecules/          # Combinations of atoms (form groups, navigation items, etc.)
│   ├── organisms/          # Complex UI components made from molecules and atoms (headers, forms, etc.)
│
├── constants/              # Constants common
├── configs/                # Config axios 
├── pages/                  # Page components, made of organisms
├── hooks/                  # Custom hooks
├── locales/                # Multiple language
├── layouts/                # Layouts project(main, auth ...)
├── utils/                  # Utility functions and helpers
├── types/                  # TypeScript type definitions
├── styles/                 # Style project
├── services/               # API services and related functions
├── store/                  # Global state,(redux, redux-saga)
├── routes/                 # List all route project
├── contexts/               # React contexts for global state management
└── index.tsx               # Entry point for the React application
````
# 3. Installation
Follow these steps to set up the project:

 ## 3.1 Clone project:
 ````
 git clone https://github.com/your-username/your-repo.git
````
 ## 3.2 Navigate to the project directory:
 ````
 cd your-repo
 ````

 ## 3.3 Install the dependencies:
 ````
 yarn install
 ````

# 4. Available Scripts
In the project directory, you can run the following scripts:
Runs the app in development mode. Open http://localhost:3000 to view it in the browser.
````
yarn dev
````
Builds the app for production to the build folder.
````
yarn build
````
Lints the TypeScript code using ESLint.
````
yarn lint
````
Run storybook view core component
````
yarn storybook
````