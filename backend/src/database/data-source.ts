import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateUsersTable1681665995719 } from './migrations/1681665995719-CreateUsersTable'
import User from '../app/entities/User';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3308,
    username: "root",
    password: "api",
    //database: "inspection-product",
    database: "api",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreateUsersTable1681665995719],
    subscribers: []
})