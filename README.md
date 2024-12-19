# Web3 Integration Backend

This project is a backend service built to integrate Web3 functionality using GraphQL and TypeScript. It interacts with Ethereum-based smart contracts, providing APIs for managing and querying blockchain data. The backend utilizes Apollo Server, TypeGraphQL, Ethers.js, and MongoDB for seamless integration and data persistence.

### Features
- GraphQL API: Provides a schema-driven approach to query and mutate data.
- Smart Contract Interaction: Utilizes Ethers.js to interact with Ethereum smart contracts.
- MongoDB Integration: Stores and retrieves application-related data efficiently.
- Error Handling: Built-in error handling for GraphQL and database operations.
- TypeScript: Ensures type safety and better developer experience.


### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: You should have Node.js installed. [Download Node.js](https://nodejs.org)
- An Ethereum RPC provider (e.g., Infura or Alchemy)
- MongoDB (Local or Cloud instance)

### Installation

Clone the repo and install dependencies

```shell
git clone https://github.com/udodinho/web2-web3-integration.git
cd web3-integration-backend
```

```shell
$ npm install
```

### Setup environment

```shell
LISK_RPC_URL=https://rpc.sepolia-api.lisk.com/
ACCOUNT_PRIVATE_KEY=your_private_key_here
MONGODB_URI=your_mongodb_connection_string
CONTRACT_ADDRESS="0xcf280E052A654c7200cd92164A718ab1Ea381BDB"
```

### Compile Typescript

```shell
$ npx tsc
```

### Start server

```shell
$ npx nodemon src/types/index.ts
```

## API Documentation

### Queries

### getCount
- Description: Fetches the count value from the smart contract.
- Response Type: String

```shell
query getCount{
  getCount
}
```

### getUsers
- Description: Fetches all users from the DB.
- Response Type: User

```shell
query getUsers{
  getUsers {
    id
    name
    email
  }
}
```

### Mutations

### addUser
- Description: Adds a new user to the database.
- Arguments:
    - name (String, required)
    - email (String, required)
- Response Type: User

```shell
mutation {
  addUser(name: "John Doe", email: "john.doe@example.com") {
    id
    name
    email
  }
}
```

### incrementCount
- Description: Increments the count value stored in the smart contract.
- Response Type: String
- Returns: The transaction hash as a confirmation of the successful execution.

```shell
mutation {
  incrementCount
}
```

### decrementCount
- Description: decrements the count value stored in the smart contract.
- Response Type: String
- Returns: The transaction hash as a confirmation of the successful execution.

```shell
mutation {
  decrementCount
}
```
