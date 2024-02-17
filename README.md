# The React-Redux Bank Project

This project is a banking application built using React and Redux. It allows users to create new customers, manage accounts, deposit and withdraw funds, request loans, and pay back loans.

## Features

- **Create Customer**: Users can create new customers by providing their full name and national ID.
- **Account Operations**: Users can perform various account operations such as depositing funds, withdrawing funds, requesting loans, and paying back loans.
- **Balance Display**: Displays the current balance in the account.
- **Customer Information**: Displays a welcome message with the customer's full name.

## Project Structure

The project is structured into different features:

- **Accounts**:

  - `AccountOperations.js`: Handles account operations like deposit, withdrawal, loan requests, and loan repayments.
  - `accountSlice.js`: Manages the account state and includes reducers for deposit, withdrawal, loan requests, and loan repayments.

- **Customers**:

  - `CreateCustomer.js`: Allows users to create new customers by providing their information.
  - `Customer.js`: Displays a welcome message with the customer's full name.
  - `customerSlice.js`: Manages the customer state and includes reducers for creating customers and updating customer information.

- **App**:

  - `App.js`: Main component that renders the application layout and conditionally displays components based on customer information.

- **Store**:

  - `store.js`: Configures the Redux store with reducers for accounts and customers.

- **Index**:
  - `index.js`: Entry point of the application where the React app is rendered and connected to the Redux store.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm start`.

## Available Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.

For more information on Create React App, refer to the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Deployment

To deploy the application, build the project using `npm run build` and deploy the generated files.
