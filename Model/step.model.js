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
    option_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    step_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    option_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    subCategory_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    next_step_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "Steps",
  }
);
