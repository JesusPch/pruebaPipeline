import {DataTypes} from "sequelize";
import {sequelize} from '../DataBase/DB.js';
import { Task } from "./Task.js";


export const Project = sequelize.define('projects', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    priority:{
        type: DataTypes.INTEGER
    },
    description:{
        type: DataTypes.STRING
    }    
},
{
    timestamps: false
}
);


// Relación entre Project y Task de las tablas de la base de datos
Project.hasMany(Task, { 
    foreignKey: 'projectId',
    sourceKey: 'id'
});

Task.belongsTo(Project, {
    foreignKey: 'projectId',
    targetId: 'id'
});