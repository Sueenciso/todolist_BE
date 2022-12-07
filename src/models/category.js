//construimos los recursos del negocio de la aplicacion
const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true }, //propiedad 1 con opciones requeridas y unicas entre todos los registros
  products: { type: [mongoose.ObjectId] }, //propiedad 2
});

const model = mongoose.model("Category", schema); //Category es el recurso, con 2 propiedades

module.exports = {
  schema,
  model,
};