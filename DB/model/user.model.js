import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

const UserModel = sequelize.define('User', {
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    userName : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : false,
    },
    gender : {
        type : DataTypes.ENUM("male", 'female'),
        defaultValue : "male",
        allowNull : false
    },
    role : {
        type : DataTypes.ENUM('admin', "user"),
        defaultValue : 'user',
        allowNull : false
    }
});
export default UserModel;