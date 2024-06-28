import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'userdb',
    'root',
    'password',
    {
        dialect: 'mysql',
        host: 'localhost',
   }
)

const connectTodb = async () =>  {
    try {
        await sequelize.authenticate()
        console.log("connected....");   
    } 
    catch (error) {   
        console.log(error);  
    }
};

module.exports = {sequelize, connectTodb}