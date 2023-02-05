import { DataTypes } from 'sequelize'
import {sequelize} from '../database/database.js'
import { Type } from './Type.js'


export const Project = sequelize.define('projects', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tittle:{
            type: DataTypes.STRING,
        },
        description:{
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
          },
    },  
    {
      timestamps: false,
      createdAt: false, 
    }
);

Project.belongsToMany(Type,{through:'projectType'});
Type.belongsToMany(Project,{through:'projectType'});