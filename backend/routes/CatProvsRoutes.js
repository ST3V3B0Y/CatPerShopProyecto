import express from "express";
import {
  getAllCatprovs,
  getCatprov,
  createCatprov,
  updateCatprov,
  deleteCatprov,
} from "../controllers/CatProvsController.js";
export const CatProvRouter = express.Router();

CatProvRouter.get("/", getAllCatprovs);
CatProvRouter.get("/:id", getCatprov);
CatProvRouter.post("/", createCatprov);
CatProvRouter.put("/:id", updateCatprov);
CatProvRouter.delete("/:id", deleteCatprov);
