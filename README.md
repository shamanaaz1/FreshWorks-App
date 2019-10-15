This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Backend

For backend we are using online Mock API, https://www.mockapi.io/

### About the App

We are assuming the user will feed the ducks once per day and we have a option to repeat the schedule for next one day, if you want to check the repeating schedule we have an optional check box to see the sheduale for next 5 minuets (means once the user checked this check box and submitted the form same record will be created after 5 minuets).

Since we are depending on the online mock api supose if the user refresh the application still timers will work because we are storing the repeted schedule in local storage (For next one day) and session storage (for next 5 minuets).
