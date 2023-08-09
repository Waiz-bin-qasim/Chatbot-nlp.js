import sequelize from "../Config/Sequelize.js";
import { DataTypes } from "sequelize";

export const Steps = sequelize.define(
  "Steps",
  {
    step_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    step_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    option_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "Steps",
  }
);
