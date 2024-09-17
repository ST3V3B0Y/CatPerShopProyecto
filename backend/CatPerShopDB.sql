create database catpershop;
use catpershop; 

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: b7l0kdf9aaiprg6x683n-mysql.services.clever-cloud.com:3306
-- Tiempo de generación: 14-09-2024 a las 13:14:24
-- Versión del servidor: 8.0.22-13
-- Versión de PHP: 8.2.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `b7l0kdf9aaiprg6x683n`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blogs`
--

CREATE TABLE `blogs` (
  `id` int NOT NULL,
  `title` varchar(120) NOT NULL,
  `content` varchar(120) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `content`, `createdAt`, `updatedAt`) VALUES
(39, '', '', '2024-09-13 17:18:08', '2024-09-13 17:18:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoriaProds`
--

CREATE TABLE `categoriaProds` (
  `catProd_id` int NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categoriaProds`
--

INSERT INTO `categoriaProds` (`catProd_id`, `tipo`, `createdAt`, `updatedAt`) VALUES
(1, 'ACCESORIO PARA PERROS', NULL, NULL),
(2, 'ACCESORIO PARA GATOS', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoriaProvs`
--

CREATE TABLE `categoriaProvs` (
  `catProv_id` int NOT NULL,
  `tipo` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categoriaProvs`
--

INSERT INTO `categoriaProvs` (`catProv_id`, `tipo`, `createdAt`, `updatedAt`) VALUES
(1, 'ACCESORIO PARA PERROS', NULL, NULL),
(2, 'ACCESORIO PARA GATOS', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `cliente_id` int NOT NULL,
  `nombre_cliente` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `correo` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `telefono` int NOT NULL,
  `mascota` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `direccion` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`cliente_id`, `nombre_cliente`, `correo`, `telefono`, `mascota`, `direccion`, `createdAt`, `updatedAt`) VALUES
(1, 'Santiago Saavedra', 'santiago@email.com', 301010100, 'Perro', 'Cl 1 # 10, 15', NULL, '2024-09-10 19:50:28'),
(2, 'Camila Martinez', 'camila@email.com', 301010101, 'Gato', 'Cl 2 # 12, 20', NULL, NULL),
(3, 'Miguel Rodriguez', 'miguel@email.com', 301010102, 'Perro', 'Cra 15 # 25, 01', NULL, NULL),
(4, 'Sara Bejarano', 'sara@email.com', 301010103, 'Gato', 'Cra 3 # 14, 06', NULL, NULL),
(5, 'Steven Jaramillo', 'steven@email.com', 301010104, 'Perro', 'Cra 3 # 30, 03', NULL, NULL),
(6, 'Samuel Sambrano', 'samuel@email.com', 301010105, 'Perro', 'Cl 1 # 18, 18', NULL, NULL),
(7, 'Luisa Diaz', 'Luisa@email.com', 301010106, 'Perro', 'Tv 15 # 80, 24', NULL, NULL),
(8, 'Santiago Saavedra', 'santiago@email.com', 301010107, 'Perro', 'Cl 1 # 1, 1', NULL, NULL),
(9, 'Carlos Oriz', 'carlos@email.com', 301010108, 'Gato', 'Cl 100 # 100, 10', NULL, NULL),
(10, 'Luis Diaz', 'luis@email.com', 301010109, 'Gato', 'Cra 10 # 150, 10', NULL, NULL),
(11, 'Brayan Osorio', 'brayan@email.com', 301010110, 'Perro', 'Cra 1 # 15, 15', NULL, NULL),
(12, 'Sharik Arenas', 'sharik@email.com', 301010111, 'Perro', 'Cra 11 # 11, 11', NULL, NULL),
(13, 'Sergio Ramos', 'sergio@email.com', 301010112, 'Gato', 'Cra 110 # 19, 07', NULL, NULL),
(14, 'Maria Mendez', 'maria@email.com', 301010113, 'Gato', 'Cra 20 # 120, 09', NULL, NULL),
(15, 'Monica Sanchez', 'monica@email.com', 301010114, 'Perro', 'Cra 120 # 20, 19', '2024-09-10 20:03:42', '2024-09-10 20:11:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallePeds`
--

CREATE TABLE `detallePeds` (
  `detPedido_id` int NOT NULL,
  `id_producto` int NOT NULL,
  `cantidad` int NOT NULL,
  `precio` int NOT NULL,
  `descuento` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `pedido_id` int NOT NULL,
  `id_cliente` int NOT NULL,
  `fecha` date NOT NULL,
  `impuesto` float NOT NULL,
  `total` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `producto_id` int NOT NULL,
  `producto` varchar(120) NOT NULL,
  `id_proveedor` int DEFAULT NULL,
  `id_categoria` int DEFAULT NULL,
  `precio` int NOT NULL,
  `descripcion` varchar(80) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`producto_id`, `producto`, `id_proveedor`, `id_categoria`, `precio`, `descripcion`, `createdAt`, `updatedAt`) VALUES
(72, 'Bebedero portatil plastico', NULL, NULL, 17000, NULL, NULL, NULL),
(73, 'Platos plegables pequeños ', NULL, NULL, 9000, NULL, NULL, NULL),
(74, 'Cepillos de boton 	', NULL, NULL, 17000, NULL, NULL, NULL),
(75, 'Hueso pelota 	', NULL, NULL, 20000, NULL, NULL, NULL),
(76, 'Cortauñas  lima 	', NULL, NULL, 12000, NULL, NULL, NULL),
(77, 'Cortauñas gato', NULL, NULL, 6000, NULL, NULL, NULL),
(78, 'Cepillo dispensador de jabon pequeño	', NULL, NULL, 13000, NULL, NULL, NULL),
(79, 'Comederos antireflujo	', NULL, NULL, 24000, NULL, NULL, NULL),
(80, 'Peine doble redondo	', NULL, NULL, 27000, NULL, NULL, NULL),
(81, 'Comederos plegables antireflujo	', NULL, NULL, 38000, NULL, NULL, NULL),
(82, 'Comederos portatil viajero	', NULL, NULL, 35000, NULL, NULL, NULL),
(83, 'Rascador de acordeon 	', NULL, NULL, 37000, NULL, NULL, NULL),
(84, 'Comederos interactivos 	', NULL, NULL, 41000, NULL, NULL, NULL),
(85, 'Filtros fuentes 	', NULL, NULL, 30000, NULL, NULL, NULL),
(86, 'Kit de aseo 3 en 1	', NULL, NULL, 30000, NULL, NULL, NULL),
(87, 'Catnip 	', NULL, NULL, 10000, NULL, NULL, NULL),
(88, 'Capas lluvia	', NULL, NULL, 30000, NULL, NULL, NULL),
(89, 'Pistola lanza bolas de felpa 	', NULL, NULL, 15000, NULL, NULL, NULL),
(90, 'Rascadores esquineros	', NULL, NULL, 11000, NULL, NULL, NULL),
(91, 'Comederos forma de oso	', NULL, NULL, 24000, NULL, NULL, NULL),
(92, 'Cepillo quita pelos china	', NULL, NULL, 25000, NULL, NULL, NULL),
(93, 'Fuentes de agua 	', NULL, NULL, 86000, NULL, NULL, NULL),
(94, 'Tapetes talla L	', NULL, NULL, 30000, NULL, NULL, NULL),
(95, 'Tapetes talla S	', NULL, NULL, 25000, NULL, NULL, NULL),
(96, 'Gomas pegajosas	', NULL, NULL, 16000, NULL, NULL, NULL),
(97, 'Rascador carton curvo 	', NULL, NULL, 23000, NULL, NULL, NULL),
(98, 'Comederos unitarios altos gato 	', NULL, NULL, 14000, NULL, NULL, NULL),
(99, 'Cepillo de dientes crema 	', NULL, NULL, 23000, NULL, NULL, NULL),
(100, 'Bebedero portatil caucho 	', NULL, NULL, 22000, NULL, NULL, NULL),
(101, 'Pelota saltarina	', NULL, NULL, 25000, NULL, NULL, NULL),
(102, 'Comedero antigloton	', NULL, NULL, 20000, NULL, NULL, NULL),
(103, 'Dispensador snack gatos 	', NULL, NULL, 18000, NULL, NULL, NULL),
(104, 'Llantas macizas 	', NULL, NULL, 12000, NULL, NULL, NULL),
(105, 'Pelotas chillonas	', NULL, NULL, 12000, NULL, NULL, NULL),
(106, 'Palas arenero 	', NULL, NULL, 10000, NULL, NULL, NULL),
(107, 'Pecheras grandes 	', NULL, NULL, 20000, NULL, NULL, NULL),
(108, 'Pecheras pequeñas	', NULL, NULL, 16000, NULL, NULL, NULL),
(109, 'Lazo doble funcion 	', NULL, NULL, 22000, NULL, NULL, NULL),
(110, 'Pecheras alas de gato 	', NULL, NULL, 15000, NULL, NULL, NULL),
(111, 'Gargantillas anti ahogo para gato ', NULL, NULL, 6000, NULL, NULL, NULL),
(112, 'Areneras + pala + 5 rollos de bolsa	', NULL, NULL, 60000, NULL, NULL, NULL),
(113, 'Carbon activo en perlas 	', NULL, NULL, 20000, NULL, NULL, NULL),
(114, 'Dispensador bolsas pop	', NULL, NULL, 13000, NULL, NULL, NULL),
(115, 'Dispensador de jabon grande 	', NULL, NULL, 25000, NULL, NULL, NULL),
(116, 'Snack patas de pollo	', NULL, NULL, 18000, NULL, NULL, NULL),
(117, 'Comedero alto plastico	', NULL, NULL, 45000, NULL, NULL, NULL),
(118, 'Pañitos humedos ', NULL, NULL, 8000, NULL, NULL, NULL),
(119, 'Piramides de catnip 	', NULL, NULL, 35000, NULL, NULL, NULL),
(120, 'Comedero bebedero gato 	', NULL, NULL, 40000, NULL, NULL, NULL),
(121, 'Quitapelos sapito 	', NULL, NULL, 30000, NULL, NULL, NULL),
(122, 'Rollos de bolsas ', NULL, NULL, 1200, NULL, NULL, NULL),
(123, 'Arena 45 kg	', NULL, NULL, 20000, NULL, NULL, NULL),
(124, 'Arena 10kg	', NULL, NULL, 40000, NULL, NULL, NULL),
(125, 'Arena carbon activado 10 kg	', NULL, NULL, 45000, NULL, NULL, NULL),
(126, 'Cepillos de vapo de soporte	', NULL, NULL, 40000, NULL, NULL, NULL),
(127, 'Cepillos de vapor de ballena	', NULL, NULL, 30000, NULL, NULL, NULL),
(128, 'Cepillos de vapor huella 	', NULL, NULL, 30000, NULL, NULL, NULL),
(129, 'Cepillos de vapor mango 	', NULL, NULL, 30000, NULL, NULL, NULL),
(130, 'Cepillos de limpieza con paño + pañitos	', NULL, NULL, 20000, NULL, NULL, NULL),
(131, 'Comedero come despacio hueso	', NULL, NULL, 15000, NULL, NULL, NULL),
(132, 'Tapetes para gatos 	', NULL, NULL, 30000, NULL, NULL, NULL),
(133, 'Hueso chillon 	', NULL, NULL, 23000, NULL, NULL, NULL),
(134, 'Comedero antireflujo flor	', NULL, NULL, 18000, NULL, NULL, NULL),
(135, 'Bola inteligente para gatos 	', NULL, NULL, 20000, NULL, NULL, NULL),
(136, 'GPS	', NULL, NULL, 15000, NULL, NULL, NULL),
(137, 'Frisby didactico perros	', NULL, NULL, 30000, NULL, NULL, NULL),
(138, 'Limpia Patas', NULL, NULL, 23000, NULL, NULL, NULL),
(139, 'pechera love	', NULL, NULL, 25000, NULL, NULL, NULL),
(140, 'Pescado electrico	', NULL, NULL, 30000, NULL, NULL, NULL),
(141, 'Guantes quitapelo', NULL, NULL, 6000, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `proveedor_id` int NOT NULL,
  `proveedor` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `correo` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `id_categoria` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prueba`
--

CREATE TABLE `prueba` (
  `id` int NOT NULL,
  `prueba` varchar(50) DEFAULT NULL,
  `cache` varchar(50) DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `prueba`
--

INSERT INTO `prueba` (`id`, `prueba`, `cache`, `createdAt`, `updatedAt`) VALUES
(1, 'prueba 1', 'caché', '0000-00-00', '0000-00-00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categoriaProds`
--
ALTER TABLE `categoriaProds`
  ADD PRIMARY KEY (`catProd_id`);

--
-- Indices de la tabla `categoriaProvs`
--
ALTER TABLE `categoriaProvs`
  ADD PRIMARY KEY (`catProv_id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`cliente_id`);

--
-- Indices de la tabla `detallePeds`
--
ALTER TABLE `detallePeds`
  ADD PRIMARY KEY (`detPedido_id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`pedido_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`producto_id`),
  ADD KEY `proveedor_productos` (`id_proveedor`),
  ADD KEY `categoria_productos` (`id_categoria`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`proveedor_id`),
  ADD KEY `categoria_provedores` (`id_categoria`);

--
-- Indices de la tabla `prueba`
--
ALTER TABLE `prueba`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de la tabla `categoriaProds`
--
ALTER TABLE `categoriaProds`
  MODIFY `catProd_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `categoriaProvs`
--
ALTER TABLE `categoriaProvs`
  MODIFY `catProv_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `cliente_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `detallePeds`
--
ALTER TABLE `detallePeds`
  MODIFY `detPedido_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `pedido_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `producto_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=142;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `proveedor_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `prueba`
--
ALTER TABLE `prueba`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `categoria_productos` FOREIGN KEY (`id_categoria`) REFERENCES `categoriaProds` (`catProd_id`),
  ADD CONSTRAINT `proveedor_productos` FOREIGN KEY (`id_proveedor`) REFERENCES `proveedores` (`proveedor_id`);

--
-- Filtros para la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD CONSTRAINT `categoria_provedores` FOREIGN KEY (`id_categoria`) REFERENCES `categoriaProvs` (`catProv_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;