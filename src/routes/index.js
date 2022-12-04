
const usersRouter = require("./userRouters");
const productsRouter = require("./productsRouters");
const categoriesRouter = require("./categoriesRouters");
const pedidosRouter = require("./pedidosRouters");

const apiRouter = (app) => {
  app.use("/users", usersRouter);
  app.use("/products", productsRouter);
  app.use("/categories", categoriesRouter);
  app.use("/pedidos",pedidosRouter);
};

module.exports = apiRouter;