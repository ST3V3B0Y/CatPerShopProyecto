//importamos el Modelo
import { ClientesModel } from "../models/CLIENTES.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllClientes = async (req, res) => {
  try {
    const Cliente = await ClientesModel.findAll();
    res.json(Cliente);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar un registro
export const getCliente = async (req, res) => {
  try {
    const Cliente = await ClientesModel.findAll({
      where: { cliente_id: req.params.id },
    });
    res.json(Cliente[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Crear un registro
export const createCliente = async (req, res) => {
  try {
    await ClientesModel.create(req.body);
    res.json({
      message: "¡Registro creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Actualizar un registro
export const updateCliente = async (req, res) => {
  try {
    await ClientesModel.update(req.body, {
      where: { cliente_id: req.params.id },
    });
    res.json({
      message: "¡Registro actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Eliminar un registro
export const deleteCliente = async (req, res) => {
  try {
    await ClientesModel.destroy({
      where: { cliente_id: req.params.id },
    });
    res.json({
      message: "¡Registro eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
