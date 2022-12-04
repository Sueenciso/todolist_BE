require("dotenv").config()//busca el archivo .env y si no esta en raiz deberiamos especificar la ruta dentro de estos parentesis

const {APP_PORT,APP_DB_HOST,APP_DB_PASSWORD,APP_DB_USER}=process.env
const config={
    app:{
        port: process.env.APP_PORT || 8001,
    },
    db: {
        user:process.env.APP_DB_USER,
        password: process.env.APP_DB_PASSWORD,
        host: process.env.APP_DB_HOST,
    }
};

module.exports=config;