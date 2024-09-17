import express from "express";
import cors from "cors";
//importamos la conexión a la DB
import { db } from "./database/db.js";
//importamos nuestro enrutador
import { BlogRouter } from "./routes/BlogRoutes.js";
import { CatProdRouter } from "./routes/CatProdsRoutes.js";
import { CatProvRouter } from "./routes/CatProvsRoutes.js";
import { ClienteRouter } from "./routes/ClientesRoutes.js";
import { DetPedRouter } from "./routes/DetPedRoutes.js";
import { PedidoRouter } from "./routes/PedidosRoutes.js";
import { ProductoRouter } from "./routes/ProductosRoutes.js";
import { ProveedorRouter } from "./routes/ProveedoresRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs", BlogRouter);
app.use("/catProds", CatProdRouter);
app.use("/catProvs", CatProvRouter);
app.use("/cliente", ClienteRouter);
app.use("/detPed", DetPedRouter);
app.use("/pedido", PedidoRouter);
app.use("/producto", ProductoRouter);
app.use("/proveedor", ProveedorRouter);

try {
  await db.authenticate();
  console.log("Conexión exitosa a la DB");
} catch (error) {
  console.log(`El error de conexión es: ${error}`);
}

app.get("/", (req, res) => {
  res.send("Bienvenido a la base de datos de Steve Jobs");
});

app.listen(8087, () => {
  console.log("Server URL: http://localhost:8087");
});
