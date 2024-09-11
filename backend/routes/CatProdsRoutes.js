import express from "express";
import {
  getAllCatprods,
  getCatprod,
  createCatprod,
  updateCatprod,
  deleteCatprod,
} from "../controllers/CatProdsController.js";
export const CatProdRouter = express.Router();

CatProdRouter.get("/", getAllCatprods);
CatProdRouter.get("/:id", getCatprod);
CatProdRouter.post("/", createCatprod);
CatProdRouter.put("/:id", updateCatprod);
CatProdRouter.delete("/:id", deleteCatprod);
