const fs = require("fs/promises");
const { Router } = require("express");
const routes = Router();
const { app } = require("../lib/config");
const taskUseCases = require("../usescases/task");

routes.get("/", async (req, res) => {
  try {
    const task = await taskUseCases.getAll();
    res.json({ ok: true, payload: task });
  } catch (error) {
    res.status(400).json({ ok: false, payload: task });
  }
});

routes.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const { name, products } = await taskUseCases.getById(id);
    res.json({ ok: true, payload: { name, products } });
  } catch (error) {
    res.status(400).json({ ok: false, message: error });
  }
});

routes.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const payload = await taskUseCases.create(name);
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
    const category = await taskUseCases.update(id, data);
    res.json({ ok: true, payload: category });
  } catch (error) {
    const {message}=error;
    res.status(400).json({ ok: false, message: error });
  }
});

routes.delete("/:id", async (req, res) => {
  
  try{
    const { id } = req.params;
    const task= await taskUseCases.del(id)

    res.json({ok:true,payload: task})
  }catch(error){
    const {message}=error
    res.status(400).json({ok:false,message})
  }
});

module.exports = routes;