//importamos el Modelo
import { CatProvModel } from "../models/CATEGORIA_PROVS.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllCatprovs = async (req, res) => {
  try {
    const Catprov = await CatProvModel.findAll();
    res.json(Catprov);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar un registro
export const getCatprov = async (req, res) => {
  try {
    const Catprov = await CatProvModel.findAll({
      where: { catProv_id: req.params.id },
    });
    res.json(Catprov[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Crear un registro
export const createCatprov = async (req, res) => {
  try {
    await CatProvModel.create(req.body, {});
    res.json({
      message: "¡Registro creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Actualizar un registro
export const updateCatprov = async (req, res) => {
  try {
    await CatProvModel.update(req.body, {
      where: { catProv_id: req.params.id },
    });
    res.json({
      message: "¡Registro actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Eliminar un registro
export const deleteCatprov = async (req, res) => {
  try {
    await CatProvModel.destroy({
      where: { catProv_id: req.params.id },
    });
    res.json({
      message: "¡Registro eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
