//importamos el Modelo
import { PedidosModel } from "../models/PEDIDOS.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllPedidos = async (req, res) => {
  try {
    const Pedido = await PedidosModel.findAll();
    res.json(Pedido);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar un registro
export const getPedido = async (req, res) => {
  try {
    const Pedido = await PedidosModel.findAll({
      where: { pedido_id: req.params.id },
    });
    res.json(Pedido[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Crear un registro
export const createPedido = async (req, res) => {
  try {
    await PedidosModel.create(req.body, {});
    res.json({
      message: "¡Registro creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Actualizar un registro
export const updatePedido = async (req, res) => {
  try {
    await PedidosModel.update(req.body, {
      where: { pedido_id: req.params.id },
    });
    res.json({
      message: "¡Registro actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Eliminar un registro
export const deletePedido = async (req, res) => {
  try {
    await PedidosModel.destroy({
      where: { pedido_id: req.params.id },
    });
    res.json({
      message: "¡Registro eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
