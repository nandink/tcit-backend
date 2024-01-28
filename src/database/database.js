import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('challengedb', 'postgres', 'tcitpass',
{
    host: 'localhost',
    dialect: 'postgres'
})