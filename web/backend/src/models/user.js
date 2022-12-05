import { DataTypes } from 'sequelize'
import {sequelize} from '../database/database.js'
import {Food} from './aliment.js'

export const User=sequelize.define('Users',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nume: {
        type: DataTypes.STRING
      },
      prenume: {
        type: DataTypes.STRING
      },
      locatie: {
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique:true
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      contact_no:{
        type: DataTypes.STRING
      }
},{timestamps:false});

User.hasMany(Food,{
  foreignKey:'user_id',
  sourceKey:'id'
})

Food.belongsTo(User,{
  foreignKey:'user_id',
  targetId:'food_id'
})