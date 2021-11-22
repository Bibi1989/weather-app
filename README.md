# Payoneeer Weather App Project

## Description

An application that display weather forcast for five days and gives you a stat of different weather condition at different times of a day you selected, it also shows you temperature unit in celcius or fahrenheit

## Tools used

- Reactjs
- Redux
- Redux/Toolkit
- styled-components
- Typescript
- Lodash
- Moment

## Requirements

For development, you will only need Node.js and a node global package, Yarn/npm, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Node installation on Mac

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

### Running the project locally

    $ yarn start

    Runs the app in the development mode on `localhost:3000`

### Run tests

    $ yarn test

    Launches the test runner in the interactive watch mode.

### Run tests coverage

    $ yarn test:coverage

### Run build

    $ yarn build

    Build application for production to the build folder.

### Run predeploy

    $ yarn predeploy

### Run deploy

    $ yarn deploy

    deploys the application to github page

## Project file structure

```
    payoneer-reactjs/
    README.md
    node_modules/
    package.json
    public/
        index.html
        favicon.ico
    src/
        App.tsx
        index.css
        index.tsx
        styles.tsx
        components/
            BarChart/
                __tests__/
                    BarChart.test.tsx
                index.tsx
                styles.tsx
            Loader/
                LoaderComponent.tsx 
                styles.tsx
            UI/
                CustomBtn.tsx                        
                EmptyComponent.tsx                        
                NextBtn.tsx                        
                PrevBtn.tsx                        
                RadioGroup.tsx 
                styles.tsx  
            Weather/
                __tests__/
                    index.test.tsx
                    card.test.tsx
                index.tsx                     
                Card.tsx  
                styles.tsx 
            WeatherActions/
                __tests__/
                    WeatherAction.test.tsx
                index.tsx  
                styles.tsx
        constants/
            api.ts
            static.ts  
        pages/
            WeatherPage.tsx 
            styles.tsx 
        redux/
            __tests__/ 
                weatherAction.test.ts
                weatherSlice.test.ts
            slices/
                weathers/
                    weatherActions.ts
                    weatherSlice.ts
            reducers.ts
            store.ts   
        typescript/
            react-props.types.ts        
            redux.types.ts        
            weather.types.ts 
        utils/
            __tests__/
                formatWeatherReturn.test.ts
                getPresentDateWeather.test.ts
            test-data/
                mockWeatherData.ts
            chartData.ts
            formatWeatherReturn.ts
            getPresentDateWeather.ts  
            useWindowSize.ts 
```

## Application walkthrough:

- pages/WeatherPage
    This page display everything about the application

- components/BarChart
    This component render the Bar chart of the weathers list for a selected weather forecast.

- components/Loader
    This component render render a spinner that indicate that data is fetching.

- components/UI
    This directory has the ui's for reusability, e.g the button, input radio button, the empty component, and pagination buttons.

- components/Weather
    The weather component renders the weather lists 

- components/WeatherAction
    The weather action component renders the actions ui's, for example the refresh button, the radio buttons that switches between celcius and fahrenheit.

- redux/weatherSlice
    Manages the global state of the application.

## Why use styled components

Styled Components help keep styling separated and make components more readable. Furthermore, when you have components that rely on JavaScript for their style, Styled Components gives control of those states back to CSS instead of using a multitude of conditional class names.

## Why use lodash

Lodash is a javascript utility tool that help in writing concise and maintainable code. Moment 
