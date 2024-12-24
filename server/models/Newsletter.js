const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Newsletter = sequelize.define('Newsletter', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    }
}, {
    timestamps: true
});

module.exports = Newsletter;