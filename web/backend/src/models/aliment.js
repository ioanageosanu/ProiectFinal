import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'

export const Food=sequelize.define('food',{
    food_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      denumire: {
        type: DataTypes.STRING
      },
       data_expirare: {
         allowNull: false,
         type: DataTypes.DATE
      },
      categorie:{
        type: DataTypes.STRING
      }
},{timestamps:false});