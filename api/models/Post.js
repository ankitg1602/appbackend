const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const Post = sequelize.define('Post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true 
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    posts: {
        type: Sequelize.JSON
    }
})
module.exports = Post;