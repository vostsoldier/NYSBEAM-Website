const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const EventRegistration = sequelize.define('EventRegistration', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Projects', 
            key: 'id'
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    }
}, {
    timestamps: true,
    uniqueKeys: {
        actions_unique: {
            fields: ['eventId', 'userId']
        }
    }
});

module.exports = EventRegistration;