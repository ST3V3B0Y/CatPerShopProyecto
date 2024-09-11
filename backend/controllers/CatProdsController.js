//importamos el Modelo
import { CatProdModel } from "../models/CATEGORIA_PRODS.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllCatprods = async (req, res) => {
  try {
    const catprod = await CatProdModel.findAll();
    res.json(catprod);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar un registro
export const getCatprod = async (req, res) => {
  try {
    const catprod = await CatProdModel.findAll({
      where: { catProd_id: req.params.id },
    });
    res.json(catprod[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Crear un registro
export const createCatprod = async (req, res) => {
  try {
    await CatProdModel.create(req.body);
    res.json({
      message: "¡Registro creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Actualizar un registro
export const updateCatprod = async (req, res) => {
  try {
    await CatProdModel.update(req.body, {
      where: { catProd_id: req.params.id },
    });
    res.json({
      message: "¡Registro actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Eliminar un registro
export const deleteCatprod = async (req, res) => {
  try {
    await CatProdModel.destroy({
      where: { catProd_id: req.params.id },
    });
    res.json({
      message: "¡Registro eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
