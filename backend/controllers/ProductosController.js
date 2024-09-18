// Importamos el Modelo

import { ProductosModel } from "../models/PRODUCTOS.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros

export const getAllProductos = async (req, res) => {
  try {
    const Producto = await ProductosModel.findAll();
    res.json(Producto);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar un registro

export const getProducto = async (req, res) => {
  try {
    const Producto = await ProductosModel.findAll({
      where: { producto_id: req.params.id },
    });
    res.json(Producto[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Crear un registro

export const createProducto = async (req, res) => {
  try {
    await ProductosModel.create(req.body, {});
    res.json({
      message: "¡Registro creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Actualizar un registro

export const updateProducto = async (req, res) => {
  try {
    await ProductosModel.update(req.body, {
      where: { producto_id: req.params.id },
    });
    res.json({
      message: "¡Registro actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Eliminar un registro

export const deleteProducto = async (req, res) => {
  try {
    await ProductosModel.destroy({
      where: { producto_id: req.params.id },
    });
    res.json({
      message: "¡Registro eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
