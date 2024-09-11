//importamos la conexión a la DB
import { db } from "../database/db.js";
//importamos sequelize
import { Sequelize, QueryTypes, Model, DataTypes } from "sequelize";

export const ProductosModel = db.define("productos", {
  producto_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  producto: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  id_proveedor: {
    type: DataTypes.INTEGER,
    // allowNull: false,
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    // allowNull: false,
  },
  precio: {
    type: DataTypes.INTEGER,
    // allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
});
