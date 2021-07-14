# AroundHome time slots booking

Project made with create-react-app, styled-components and swr as the main modules and json-server as the backend server.
The business logic is all inside the hooks, there was no need to use more robust global state or a Context for this solution

# Setup

Run `yarn install` and then need to spin up the json-server first with `yarn run api`.
With the json-server running in another window run `yarn start`

## Main Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode

### `yarn run api`

Runs the json-server with the companies data

## Future work (lack of time in the current implementation)

- improve error handling providing a way to recover from it
- the derived state from conflicting slots can be improved, is not the best BigO, the data should be flat providing
  a way to retrieve the time slots easily without traversing objects and arrays
- Theming is very simple, need to be extended and the UI core Components too
