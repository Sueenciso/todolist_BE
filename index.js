const express = require("express");
const app = express();
const apiRouter = require("./src/routes");
const { logErrors, errorHandler } = require("./src/middlewares/errorHandler");
const config = require("./src/lib/config");
const db = require("./src/lib/db");
//Declarando el proceso a ejecutar cuando
//recibe una solicitud a la ruta raiz "/" de tipo
//GET
app.use(express.json());
apiRouter(app);

app.use(logErrors);
app.use(errorHandler);

app.get("/", (req, res) => {
  //req recibimos los datos del cliente y el res es el objeto con el que vamos a responder al cliente
  res.json({ massage: "El API YA funciona" });
});
app.listen(config.app.port, async () => {
  console.log(`escuchando en el puerto ${config.app.port}`);
  try {
    await db.connect();
    console.log("DB connected");
  } catch (err) {
    console.log("conection refused: ", err);
  }
});
//Ejecutando el servidor HTTP
// app.listen(8000, (err) => {
//   if (!err) console.log("ecuchando peticion HTTP en el puerto 8000");
//   cuando se levante el servidor, quiero que me avises
//   else console.log("Ups, ocurrio un error insesperado", err);
// });
