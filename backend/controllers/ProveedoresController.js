//importamos el Modelo
import { ProveedoresModel } from "../models/PROVEEDORES.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllProveedores = async (req, res) => {
  try {
    const Proveedore = await ProveedoresModel.findAll();
    res.json(Proveedore);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar un registro
export const getProveedore = async (req, res) => {
  try {
    const Proveedore = await ProveedoresModel.findAll({
      where: { proveedor_id: req.params.id },
    });
    res.json(Proveedore[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Crear un registro
export const createProveedore = async (req, res) => {
  try {
    await ProveedoresModel.create(req.body, {});
    res.json({
      message: "¡Registro creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Actualizar un registro
export const updateProveedore = async (req, res) => {
  try {
    await ProveedoresModel.update(req.body, {
      where: { proveedor_id: req.params.id },
    });
    res.json({
      message: "¡Registro actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Eliminar un registro
export const deleteProveedore = async (req, res) => {
  try {
    await ProveedoresModel.destroy({
      where: { proveedor_id: req.params.id },
    });
    res.json({
      message: "¡Registro eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
