const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/connection');
const bcrypt = require('bcrypt');
const User = sequelizeConnection.define('user', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len:[3,30]
            // make it 3-30 characteristic
        }
    },
    password: {
        type: Sequelize,STRING,
        allowNull: false,
        validate: {
            len: [7,25] //password length will be atleast 7 and max is 25
        }
    }
}, {
    sequelize: sequelizeConnection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'users'
});

//call back function 
User.beforeCreate()
