const mongoose = require("mongoose");
//para conectarme a la bd
const config = require("./config");
//Crear una funcion que nos permita conectarnos a la DB
const connect = () => {
  return new Promise((resolve, reject) => {
    const { user, password,host } = config.db;

    mongoose.connect(
      `mongodb+srv://${user}:${password}@${host}/?retryWrites=true&w=majority`,
      
    );

    mongoose.set("strictQuery",true);

    const db = mongoose.connection;

    
    db.on("connected",()=>{
      console.log("conection successful");
      resolve(mongoose);
    })
      db.on("error",(err)=>{
      console.error("conection failed", err);
      reject(err);
    });
  });
};

module.exports={connect};
