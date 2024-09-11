import express from "express";
import {
  getAllProveedores,
  getProveedore,
  createProveedore,
  updateProveedore,
  deleteProveedore,
} from "../controllers/ProveedoresController.js";
export const ProveedorRouter = express.Router();

ProveedorRouter.get("/", getAllProveedores);
ProveedorRouter.get("/:id", getProveedore);
ProveedorRouter.post("/", createProveedore);
ProveedorRouter.put("/:id", updateProveedore);
ProveedorRouter.delete("/:id", deleteProveedore);
