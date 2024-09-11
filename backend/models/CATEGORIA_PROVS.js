//importamos la conexión a la DB
import { db } from "../database/db.js";
//importamos sequelize
import { Sequelize, QueryTypes, Model, DataTypes } from "sequelize";

//Exportamos la tabla 'CATEGORIA_PROVS' de la base de datos
export const CatProvModel = db.define("categoriaProvs", {
  catProv_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  tipo: { type: DataTypes.STRING },
});
