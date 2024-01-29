import { Sequelize } from 'sequelize'

// Load credentials from .env file
const DATABASE_NAME = process.env.DATABASE_NAME
const DATABASE_USERNAME = process.env.DATABASE_USERNAME
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
export const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD,
{
    host: 'localhost',
    dialect: 'postgres'
})