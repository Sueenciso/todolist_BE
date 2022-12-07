const Category = require("../../models/category").model;

const getAll = async () => {
  return await Category.find({}).exec(); //find recibe como argumento un objeto
};

const getById = async (id) => await Category.findById(id).exec();

const create = async (name) => {
  const category = new Category({ name });
  return await category.save(); //el metodo save, guarda datos en la BD
};

const rename = async (id, name) => {
  const category = await Category.findById(id).exec();
  category.name = name;
  return await category.save();
};

const update = async (id, data) => { //las validaciones van en los casos de usos
  const { name, products } = data;
  const category = await Category.findById(id).exec();

  category.name = name ? name: category.name
  category.products = products ? products: category.products

  return await category.save();
};

const del = async (id) =>  await Category.findByIdAndDelete(id).exec()
    

module.exports = {
  create,
  del,
  update,
  getById,
  getAll,
};
