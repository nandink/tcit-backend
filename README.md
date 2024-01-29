# TCIT Backend Challenge

This is the backend component of the app.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- PostgresSQL Database

## Getting Started

In order to run the proyect, you first need to:

1. Clone the repository
2. Install the dependencies using `npm install`
3. Set up environment variables with `.env` file
4. Start the server using `npm run dev`

After a few seconds the backend server will be running locally in the url: <http://localhost:3000>.

## Environment

To correctly set up this proyect you will need a PostgresSQL Database, in which there is through 3 variables that has to be set in `.env` file, a working example is:

```
DATABASE_NAME= 'challengedb'
DATABASE_USERNAME= 'postgres'
DATABASE_PASSWORD= 'tcitpass'
```

In which there was a PostgreSQL database named challengedb running in localhost.

## Dependencies

- `"cors": "^2.8.5"`
- `"dotenv": "^16.4.1"`
- `"express": "^4.18.2"`
- `"morgan": "^1.10.0"`
- `"pg": "^8.11.3"`
- `"pg-hstore": "^2.3.4"`
- `"sequelize": "^6.35.2"`
- `"nodemon": "^3.0.3"`