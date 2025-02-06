import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('saraha', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });
export const connectDB = () =>{
      sequelize.sync({force : false}).then(() => console.log("connection established")).catch((err) => console.log("can't connect to database", err));
}