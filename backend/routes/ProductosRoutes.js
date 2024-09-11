import express from "express";
import {
  getAllProductos,
  getProducto,
  createProducto,
  updateProducto,
  deleteProducto,
} from "../controllers/ProductosController.js";
export const ProductoRouter = express.Router();

ProductoRouter.get("/", getAllProductos);
ProductoRouter.get("/:id", getProducto);
ProductoRouter.post("/", createProducto);
ProductoRouter.put("/:id", updateProducto);
ProductoRouter.delete("/:id", deleteProducto);
