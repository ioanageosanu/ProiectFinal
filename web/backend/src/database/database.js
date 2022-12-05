import Sequelize from 'sequelize'

export const sequelize=new Sequelize(
    'ioanageosanu',
    'postgres',
    'null',
    {
    host:'localhost',
    dialect:'postgres',
    }
);