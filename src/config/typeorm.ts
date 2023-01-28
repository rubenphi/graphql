import { DataSource } from "typeorm";
import path from "path";


export const appDataSource = new DataSource({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'ruben',
    password: 'japon93',
    database: 'graphql',
    entities: [path.join(__dirname, '../entity/**/**.ts')],
    synchronize: true
  })



