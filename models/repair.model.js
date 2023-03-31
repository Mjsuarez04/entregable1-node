const { DataTypes } = require("sequelize");
const { db } = require("./../database/db");

const Repair = db.define("repairs", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pending", "completed", "canceled"),
    defaultValue: "pending",
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Repair;
