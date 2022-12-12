

const usersRouter = require("./userRouters");
const productsRouter = require("./productsRouters");
const categoriesRouter = require("./categoriesRouters");
const taskRouter = require("./taskRouters");

const apiRouter = (app) => {
  app.use("/users", usersRouter);
  app.use("/products", productsRouter);
  app.use("/categories", categoriesRouter);
  app.use("/task", taskRouter);
};

module.exports = apiRouter;