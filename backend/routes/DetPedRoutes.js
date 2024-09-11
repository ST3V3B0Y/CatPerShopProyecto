import express from "express";
import {
  getAllDetpeds,
  getDetped,
  createDetped,
  updateDetped,
  deleteDetped,
} from "../controllers/DetPedController.js";
export const DetPedRouter = express.Router();

DetPedRouter.get("/", getAllDetpeds);
DetPedRouter.get("/:id", getDetped);
DetPedRouter.post("/", createDetped);
DetPedRouter.put("/:id", updateDetped);
DetPedRouter.delete("/:id", deleteDetped);
