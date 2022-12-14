const Sequelize = require('sequelize'); 
require('dotenv').config();
 // aims to keep sign-in details private; .env file

// Connection to our DB
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { //JAWSDB MySQL
// ? new Sequelize(process.env.JAWSDB_URL)
// : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'

});

module.exports = sequelize;