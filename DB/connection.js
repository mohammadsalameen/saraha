import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('freedb_sarahaProject', 'freedb_mohammadsalameen', '!h7&&mJQT6RydxT', {
    host: 'sql.freedb.tech',
    port : 3306,
    dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });
export const connectDB = () =>{
      sequelize.sync().then(() => console.log("connection established")).catch((err) => console.log("can't connect to database", err));
}