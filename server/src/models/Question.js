const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Question', {
        id: {
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false
        },
        required: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        options: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true
        }
    }, { timestamps: false })
};