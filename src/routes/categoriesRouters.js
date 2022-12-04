const fs = require("fs/promises");
const { Router } = require("express");
const routes = Router();
const { app } = require("../lib/config");
//const { fstat } = require("fs");

routes.get("/", async (req, res) => {
  const categories = await await fs.readFile("./categories.json");
  const data = JSON.parse(categories.toString());

  res.json(data);
});

routes.get("/:categoriesid", (req, res) => {
  const data = categories.find((cat) => {
    return cat.id == req.params.categoriesid;
  });

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: "categorie not found" });
  }
});

routes.post("/", async (req, res) => {
  console.log("request body: ", req.body);

  const id = Math.ceil(Math.random() * 100);
  const { name } = req.body;

  const fileContent = await (await fs.readFile("./categories.json")).toString();

  const dataCategories = JSON.parse(fileContent);

  dataCategories.push({ id, name });

  const appendRes = await fs.writeFile(
    "./categories.json",
    JSON.stringify(dataCategories)
  );

  res.json({
    message: "Categorie created successfully",
    payload: appendRes,
  });
});

routes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const fileContent = await (await fs.readFile("./categories.json")).toString();
  const categories = JSON.parse(fileContent);

  const category = categories.find((item) => item.id == id);
  const newCategories = categories.filter((item) => id != item.id);

  category.name = name;
  newCategories.push(category);

  await fs.writeFile("./categories.json", JSON.stringify(newCategories));

  res.json({ ok: true, payload: category });
});

routes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const fileContent = await (await fs.readFile("./categories.json")).toString();
  const categories = JSON.parse(fileContent);

  const category = categories.find((item) => item.id == id);
  const newCategories = categories.filter((item) => id != item.id);

  category.name = name;
  newCategories.push(category);

  await fs.writeFile("./categories.json", JSON.stringify(newCategories));

  res.json({ ok: true, payload: category });
});

module.exports = routes;
