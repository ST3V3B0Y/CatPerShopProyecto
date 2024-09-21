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
app.use(
  cors({
    origin: "http://localhost:3000/",
    credentials: true,
  })
);
app.use(express.json());
app.use("/blogs", BlogRouter);
app.use("/categoria-productos", CatProdRouter);
app.use("/categoria-proveedores", CatProvRouter);
app.use("/clientes", ClienteRouter);
app.use("/detalle-pedidos", DetPedRouter);
app.use("/pedidos", PedidoRouter);
app.use("/productos", ProductoRouter);
app.use("/proveedores", ProveedorRouter);

try {
  await db.authenticate();
  console.log("Conexión exitosa a la DB");
} catch (error) {
  console.log(`El error de conexión es: ${error}`);
}

app.get("/", (req, res) => {
  res.send("Bienvenido a la base de datos de Steve Jobs");
});

// Cambiar a get en caso de no servir

app.post("/api/login", (req, res) => {
  const { usuario, contraseña } = req.body;
  const values = { usuario, contraseña };
  try {
    db.authenticate();
    console.log("Conexión exitosa a la DB");
  } catch (error) {
    console.log(`El error de conexión es: ${error}`);
  }

  db.query(
    "SELECT * FROM clientes WHERE usuario = ? AND contraseña = ?",
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (result.length > 0) {
          res.status(200).send(result[0]);
        } else {
          res.status(400).send("Usuario no encontrado");
        }
      }
    }
  );
  db.end();
});

app.listen(8087, () => {
  console.log("Server URL: http://localhost:8087/");
});
