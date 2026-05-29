import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'proyectodb',
    'postgres',
    '101287',
    {
     host:"host.docker.internal",
     dialect:"postgres"
    }
);