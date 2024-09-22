//importamos la conexión a la DB
import { db } from "../database/db.js";
//importamos sequelize
import { Sequelize, QueryTypes, Model, DataTypes } from "sequelize";

export const ClientesModel = db.define("clientes", {
  cliente_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre_cliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  mascota: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  usuario: {
    type: DataTypes.STRING,
  },
  contraseña: {
    type: DataTypes.STRING,
  }
});
