const { Router } = require("express");
const routes = Router();

const pedido = [
  { id: 1, destino: "dest1", Description: "one", precioEnvio: 540  },
  { id: 2, destino: "dest2", Description: "two", precioEnvio: 433},
  { id: 3, destino: "dest3", Description: "three", precioEnvio: 298 },
];

routes.get("/", (req, res) => {
  res.json(pedido);
});

routes.get("/:pedidosid", (req, res) => {
  const data = pedido.find((ped) => {
    return ped.id == req.params.pedidosid;
  });

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: "pedido not found" });
  }
});

routes.post("/",(req,res)=>{
  const data = req.body;

  const {Description,destino,precioEnvio}=data;
  const newPedido={id: 4,destino,Description,precioEnvio};
  if(!data){
    res.status(400).json({message: "user data is required"});
  }else{
    res.status(201).json({
      ok:true,
      message: "pedido creado exitosamente",
      payload: newPedido
    });
  }
});

module.exports = routes;
