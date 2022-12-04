const fs=require("fs/promises");
const { Router } = require("express");
const routes = Router();
const { app } = require("../lib/config");

const categories = [
  { id: 1, nameCategorie: "confiteria"},
  { id: 2, nameCategorie: "grocery"},
  { id: 3, nameCategorie: "Jelly"},
];

routes.get("/", async (req, res) => {
  
  res.json(categories);
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

routes.post("/", async (req,res)=>{
   console.log("request body: ",req.body);

    const id = Math.ceil(Math.random()*100);
    const {nameCategorie}=req.body;

    const appendRes = await fs.appendFile(
      "./categories.json", JSON.stringify({id, nameCategorie})
      );

  res.json({message: "Categorie created successfully",payload: appendRes})
  
});

module.exports=routes;
