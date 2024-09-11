//importamos la conexión a la DB
import { db } from "../database/db.js";
//importamos sequelize
import { Sequelize, QueryTypes, Model, DataTypes } from "sequelize";

export const BlogModel = db.define("blogs", {
  // id: {
  //   type: DataTypes.INTEGER,
  //   autoIncrement: true,
  //   primaryKey: true,
  // },
  title: { type: DataTypes.STRING, allowNull: true },
  content: { type: DataTypes.STRING, allowNull: true },
});
