const { Router } = require("express");
const routes = Router();

const product = [
  { id: 1, producttype: "lentes Oscuros", precio: 120 },
  { id: 2, producttype: "Mochila", precio: 450 },
  { id: 3, producttype: "Garrafón", precio: 48},
];

routes.get("/", (req, res) => {
  res.json(product);
});

routes.get("/:productsid", (req, res) => {
  const data = product.find((prod) => {
    return prod.id == req.params.productsid;
  });

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: "product not found" });
  }
});

routes.post("/",(req,res)=>{
  const data = req.body;

  const {producttype,precio}=data;
  const newProduct={id: 43,producttype,precio};
  if(!data){
    res.status(400).json({message: "user data is required"});
  }else{
    res.status(201).json({
      ok:true,
      message: "producto dado de alta correctamente",
      payload: newProduct
    });
  }
});

module.exports = routes;
