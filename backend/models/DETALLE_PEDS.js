//importamos la conexión a la DB
import { db } from "../database/db.js";
//importamos sequelize
import { Sequelize, QueryTypes, Model, DataTypes } from "sequelize";

export const DetPedModel = db.define("detallePeds", {
  detPedido_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descuento: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
