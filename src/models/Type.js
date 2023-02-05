import { DataTypes } from 'sequelize'
import {sequelize} from '../database/database.js'

export const Type = sequelize.define('type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    work:{
        type: DataTypes.STRING,
    },
    },  
    {
      timestamps: false,
      createdAt: false, 
    }
)