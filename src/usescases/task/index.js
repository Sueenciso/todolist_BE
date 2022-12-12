const Task = require("../../models/task").model;

const getAll = async () => {
  return await Task.find({}).exec(); //find recibe como argumento un objeto
};

const getById = async (id) => 
{
  return await Task.findById(id).exec();
}

const create = async (name) => {
  const task = new Task({ name });
  return await task.save(); //el metodo save, guarda datos en la BD
};

const rename = async (id, name) => {
  const task = await Task.findById(id).exec();
  task.name = name;
  return await task.save();
};

const update = async (id, data) => { //las validaciones van en los casos de usos
  const { name, products } = data;
  const task = await Task.findById(id).exec();

  task.name = name ? name: task.name
  task.products = products ? products: task.products

  return await task.save();
};

const del = async (id) =>  await Task.findByIdAndDelete(id).exec()
    

module.exports = {
  create,
  del,
  update,
  getById,
  getAll,
};