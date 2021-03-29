# Seasonal Produce - Hackaton project
This app was made for a 24-hour hackathon. It was built using React as the frontend and Express.js for the backend, which calls the data from the 
[Edamam API](https://developer.edamam.com/).

## Idea
This app shows vegetables and produce that are seasonal to Scandinavia, and allows users to find vegan recipes based on these. Depending on which season a user visits the site, they will be shown different vegetables.

## Tech stack
- React
- CSS
- Express + CORS 
- Node Fetch
- Heroku for deployment.\
Client/Frontend: **Work in Progress** https://seasonal-produce-client.herokuapp.com/ \
Server/Backend: https://seasonal-produce-server.herokuapp.com/food/carrot \
(/food/carrot/ as an example to show the fetched data)

## Roadmap

I would like to include the possibility to check for the location of the user, and then give suggestions based on their season. Right now having trouble finding an API that has info about local produce. The suggestions for each month now comes from an array in the same file. This shuld be moved to its own text-file if more information is gathered. 

Styling is about to have a total makeover. The CSS/layout of this is an MVP.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
