import { Sequelize } from 'sequelize';
export const connectDB = () =>{
    const sequelize = new Sequelize('saraha', 'root', '', {
        host: 'localhost',
        dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
      });
      sequelize.sync().then(() => console.log("connection established")).catch((err) => console.log("can't connect to database", err));
}