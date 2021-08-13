# Frontend Mentor - Minimalist portfolio website solution

This is a solution to the [Minimalist portfolio website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/minimalist-portfolio-website-LMy-ZRyiE). I made a small change to the design by adding the experience section. 

**Note: Frontend Mentor permits us to use our solutions for each challenge on our portfolio and with this challenge we may use it as our portfolio. Since I like it's minimalistic design, I decided to do so until I can afford to design a portfolio to my liking.**


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Preview](#preview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Available Scripts](#available-scripts)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Click the "About Me" call-to-action on the homepage and have the screen scroll down to the next section
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Message` fields are empty should show "This field is required"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"

### Preview

![Preview](./preview.jpg)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/) - JS library
- [ReactRouter](https://reactrouter.com/) - For routing in react
- [Scss](https://sass-lang.com/) - For styling
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [EasyPeasy](https://easy-peasy.vercel.app/docs/introduction/) - Easy Peasy is an abstraction of Redux. It provides a reimagined API focussing on developer experience, allowing you to quickly and easily manage your state, whilst leveraging the strong architectural guarantees and providing integration with the extensive eco-system that Redux has to offer.
- [Moment](https://momentjs.com/) - For easily working with dates and related calculations
- [FramerMotion](https://www.framer.com/motion/) - For animations

### Project development

- Development of the Nestjs [back end]() with a [PostgreSQL](https://www.postgresql.org/) database for my portal 
  - Learn Nestjs fundementals [ ✔ ]
  - Set up folder structure [ ✔ ]
  - Add and test auth endpoint and all needed functionality [ ✔ ]
  - Add and test project and all needed functionality [ ✔ ]
  - Add and test experience and all needed functionality [ ✔ ]

<br/>

- Development of the front end 
  - Removed all unnecessary files [ ✔ ]
  - Set up folder structure [ ✔ ]
  - Set up all css variables, resets and basic styling [ ✔ ]
  - Build all components first 
    - Layout
      - Header [ ✔ ]
      - Nav [ ✔ ]
      - Footer [ ✔ ]
    - Utils
      - Button [ ✔ ]
      - Container [ ✔ ]
      - Header [  ]
      - Hero [  ]
      - Input [ ✔ ]
  - Build all views
    - HomeView [  ]
    - ProjectView [  ]
    - ProjectDetailsView [  ]
    - ContactUsView [  ]
  - Add animations with [FramerMotion](https://www.framer.com/motion/)
    - Page transition from ProjectView to ProjectDetailsView [  ]
    - Scroll effects [  ]


### Useful resources

- [Animating Presence With Framer Motion](https://www.youtube.com/watch?v=gRFOstDXl1s) - For a better understanding of how to animate presence with framer motion.

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Author

- Website - [Corrie Graham](https://www.your-site.com)
- Frontend Mentor - [@CorrieGra](https://www.frontendmentor.io/profile/CorrieGra)
