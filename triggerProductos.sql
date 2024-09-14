/*DELIMITER **
CREATE TRIGGER InsProducto
AFTER INSERT ON productos
FOR EACH ROW 
BEGIN
	INSERT INTO InsProductos(accion, fecha)
    VALUES(CONCAT('Ha ingresado el producto: ',NEW.producto),NOW());
END;**}
*/

-- DROP TRIGGER InsProductos;

-- SELECT * FROM productos;

/*INSERT INTO PRODUCTOS (producto, precio, descripcion)
VALUES ('e',1000,'e');*/
 
CREATE TABLE InsProductos (
	id int auto_increment PRIMARY KEY,
    Accion varchar(80),
    Fecha datetime
 );