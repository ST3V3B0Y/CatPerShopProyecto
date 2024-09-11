import express from "express";
import {
  getAllClientes,
  getCliente,
  createCliente,
  updateCliente,
  deleteCliente,
} from "../controllers/ClientesController.js";
export const ClienteRouter = express.Router();

ClienteRouter.get("/", getAllClientes);
ClienteRouter.get("/:id", getCliente);
ClienteRouter.post("/", createCliente);
ClienteRouter.put("/:id", updateCliente);
ClienteRouter.delete("/:id", deleteCliente);
