//importamos el Modelo
import { DetPedModel } from "../models/DETALLE_PEDS.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllDetpeds = async (req, res) => {
  try {
    const Detped = await DetPedModel.findAll({});
    res.json(Detped);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar un registro
export const getDetped = async (req, res) => {
  try {
    const Detped = await DetPedModel.findAll({
      where: { detPedido_id: req.params.id },
    });
    res.json(Detped[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Crear un registro
export const createDetped = async (req, res) => {
  try {
    await DetPedModel.create(req.body, {});
    res.json({
      message: "¡Registro creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Actualizar un registro
export const updateDetped = async (req, res) => {
  try {
    await DetPedModel.update(req.body, {
      where: { detPedido_id: req.params.id },
    });
    res.json({
      message: "¡Registro actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Eliminar un registro
export const deleteDetped = async (req, res) => {
  try {
    await DetPedModel.destroy({
      where: { detPedido_id: req.params.id },
    });
    res.json({
      message: "¡Registro eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
