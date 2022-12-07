const fs = require("fs/promises");
const { Router } = require("express");
const routes = Router();
const { app } = require("../lib/config");
const categoryUseCases = require("../usescases/category");
//const { fstat } = require("fs");

routes.get("/", async (req, res) => {
  try {
    const categories = await categoryUseCases.getAll();
    res.json({ ok: true, payload: categories });
  } catch (error) {
    res.status(400).json({ ok: false, payload: categories });
  }
});

routes.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const { name, products } = await categoryUseCases.getById(id);
    res.json({ ok: true, payload: { name, products } });
  } catch (error) {
    res.status(400).json({ ok: false, message: error });
  }
});

routes.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const payload = await categoryUseCases.create(name);
    res.json({
      message: "Categorie created successfully",
      payload,
    });
  } catch (error) {
    const {message}=error;
    res.status(400).json({ok: false,message: error,});
  }
});

routes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, products } = req.body;

  try {
    const data = { name, products };
    const category = await categoryUseCases.update(id, data);
    res.json({ ok: true, payload: category });
  } catch (error) {
    const {message}=error;
    res.status(400).json({ ok: false, message: error });
  }
});

routes.delete("/:id", async (req, res) => {
  
  try{
    const { id } = req.params;
    const categories= await categoryUseCases.del(id)

    res.json({ok:true,payload: categories})
  }catch(error){
    const {message}=error
    res.status(400).json({ok:false,message})
  }
});

module.exports = routes;
