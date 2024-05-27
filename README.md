# Bad Banking Updated

A simple banking application built with Express, MongoDB, and React. This app allows users to create accounts, deposit and withdraw money, and view their balance and account information.




# Table of Contents
- Features
- Technologies Used
- Getting Started
- Usage
- API Endpoints
- React Components
- Contributing
- License

# Features
- User account creation
- User login
- Deposit money
- Withdraw money
- Check account balance
- View all user data

# Technologies Used
- Backend: Node.js, Express, MongoDB
- Frontend: React, React Router
- Styling: Bootstrap

# Getting Started
Prerequisites
- Node.js
- Docker

# Installation

1. Clone the repository:
   - git clone https://github.com/bcolindres/Bad-Banking-Updated
   - cd banking-app

2. Install backend dependencies:
   - cd backend
   - npm install

3. Install frontend dependencies:
   - cd ../frontend
   - npm install

4. Start MongoDB using Docker:
   - docker run -p 27017:27017 --name badbank -d mongo

# Starting the Application

1. Start the backend server:
   - cd backend
   - node index.js

2. Start the frontend server:
   - cd ../frontend
   - npm start

3. Open your browser and navigate to:
   - http://localhost:3000

# Usage
- Navigate to the homepage and create a new account.
- Use the navigation bar to deposit, withdraw, and check your balance.

# API Endpoints
- Create account: /account/create/:name/:email/:password
- Login: /account/login/:email/:password
- Find user: /account/find/:email
- Find one user: /account/findOne/:email
- Update account: /account/update/:email/:amount
- Get all accounts: /account/all

# Example Requests

Create account:
  - curl http://localhost:3000/account/create/johndoe/johndoe@example.com/secret

Login: 
  - curl http://localhost:3000/account/login/johndoe@example.com/secret

# React Components

- Spa: The main component that includes routing and context provider.
- NavBar: The navigation bar component.
- Home: The home page component.
- CreateAccount: Component to create a new account.
- Deposit: Component to deposit money.
- Withdraw: Component to withdraw money.
- Balance: Component to check account balance.
- AllData: Component to view all user data.

# License
This project is licensed under the MIT License - see the LICENSE file for details.
