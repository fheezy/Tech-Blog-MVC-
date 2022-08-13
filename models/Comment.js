const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/connection');
const Comment = sequelizeConnection.define('comment', {

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
    
    postID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
           model: 'Post',
           key: 'id' 
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
    timestamps: true,
    freezeTableName: true,
    modelName: 'comment',
    underscored: true,
    
});

module.exports = Comment;
