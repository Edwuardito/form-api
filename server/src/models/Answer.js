const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Answer",{
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        answer: {
          type: DataTypes.STRING,
          allowNull: false,
        }
      },{ timestamps: false }
    );
};