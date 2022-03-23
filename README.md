# What is it?
This COVID-19 Tracking App is a React application which models and graphs the spread of COVID-19 through multiple visualization tools. Users can specify toggle between all the countries in the world and access live COVID-19 data representation on a table, on a line graph, and through a map.

# Why is it relevant?
This COVID-19 Tracking App allows users to better understand the spread of COVID-19 around the world by providing accurate and up-to-date COVID-19 data. Through different visual representations, users can become more informed of the trends of COVID-19 in different countries around the world.

# How does it work?
This React Application requests and draws data from both the Worldometer and John Hopkins University through a third-party API called disease.sh. The modelling approached is executed through the use of React Leaflet and Charts.js, which produces a graphically and map-based representation of relevant COVID data such as the the number of new cases, recoveries and deaths. Materials UI components such as "Card" are also brought in as complimentary data visualization tools to display data boxes and tables. Users can interact with the table and find each countries's respective COVID-19 data. Users can also click on the pins on the map to view an interative text, which displays historical COVID-19 information.

# Screenshots of Project
![COVID_APP_SS1](https://user-images.githubusercontent.com/70820857/159797395-e6aa2f69-e7e4-4eb2-a910-cfbd7297584e.png)
![COVID_APP_SS2](https://user-images.githubusercontent.com/70820857/159797431-afb3b47a-d021-4c60-a4b6-d300e424c105.png)

# How to Run this Project

All the files must be downloaded initially. Then in the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
