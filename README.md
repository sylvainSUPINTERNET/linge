  Use your OAuth2 credentials to test it ( export env variable in your terminal where you run the project)
  
    "client_id": process.env.REACT_APP_GOOGLE_OAUTH2_CLIENTID,
    "client_secret": process.env.REACT_APP_GOOGLE_OAUTH2_SECRET

POST -> https://www.googleapis.com/oauth2/v4/token to get token with OAuth2 parameters



# OAuth2 ( authorized / authenticate ) flows : 

                    // -- FLOWS --
                    // user logged => get 3 tokens
                    // Change generated token when user login in redis db by the new refresh token
                    // save in localStorage access token / id_token

                    // -- Info --
                    // access_token => short live to request Google API (related to scoped associated)  => keep in localStorage
                    // refresh_token => keep it in safe place ( long live time, use it to revoke ) => associate user email with this token in redis db
                    // id_token => contains user detail ( no sensitive data ) => keep in localStorage

* Keep in mind *
With refresh token, we can ask for a new access_token to use Google API for X reason
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
