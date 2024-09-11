//importamos la conexión a la DB
import { db } from "../database/db.js";
//importamos sequelize
import { Sequelize, QueryTypes, Model, DataTypes } from "sequelize";

export const ProveedoresModel = db.define("proveedores", {
  proveedor_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  proveedor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
