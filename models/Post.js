const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/connection');
const User = sequelizeConnection.define('post', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,   
        autoIncrement: true,
        allowNull: false
    },
// allows text
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    
    userID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
           model: 'User',
           key: 'id' 
        }
    }

}, {
    sequelize: sequelizeConnection,
    timestamps: false,
    freezeTableName: true,
    modelName: 'post',
    underscored: true,
    
});

module.exports = Post;
