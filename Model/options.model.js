import sequelize from "../Config/Sequelize.js";
import { DataTypes } from "sequelize";

export const Options = sequelize.define(
  "Options",
  {
    option_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    step_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
      allowNull: true,
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "Options",
  }
);
