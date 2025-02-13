import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import UserModel from "./user.model.js";

const MessageModel = sequelize.define('Message', {
    content : {
        type : DataTypes.TEXT,
        allowNull : false
    }
});

UserModel.hasMany(MessageModel);
MessageModel.belongsTo(UserModel);


export default MessageModel;

