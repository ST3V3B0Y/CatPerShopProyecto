import express from "express";
import {
  getAllPedidos,
  getPedido,
  createPedido,
  updatePedido,
  deletePedido,
} from "../controllers/PedidosController.js";
export const PedidoRouter = express.Router();

PedidoRouter.get("/", getAllPedidos);
PedidoRouter.get("/:id", getPedido);
PedidoRouter.post("/", createPedido);
PedidoRouter.put("/:id", updatePedido);
PedidoRouter.delete("/:id", deletePedido);
