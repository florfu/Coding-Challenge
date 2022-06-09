# Post It App
Save your ideas on this notes App.
You can create new notes, edit them & delete them when you don't need them anymore.
Created using React and Tailwindcss. Developed by Florencia Funes.

## Installation

1. First, clone the repo with:

    ```git clone git@github.com:florfu/Coding-Challenge.git```

2. Navigate to the project with:

    ```cd ./Coding-Challenge```

3. Install dependencies:

    ```npm install```

    This will create the `node_modules` directory with all the needed packages.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
Currently two tests available. 

### `npm run lint`

This command runs the linter configured with Airbnb's Style Guide.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

=======================

# Dependencies
## react-router-dom
The react-router-dom package contains bindings for using React Router in web applications.
documentation: https://github.com/remix-run/react-router#readme

## eslint
Linter to check for code errors.
documentation: https://eslint.org/

## tailwind
CSS framework.
documentation: https://tailwindcss.com/

## uuid 
Package used to generate unique keys for components.
documentation: https://github.com/uuidjs/uuid#readme

## react icons
Icons package.
documentation: https://react-icons.github.io/react-icons/

# Notes
- Disabled prop-types check on eslint
- Disabled jsx-no-bind check on eslint: https://stackoverflow.com/questions/36677733/why-shouldnt-jsx-props-use-arrow-functions-or-bind