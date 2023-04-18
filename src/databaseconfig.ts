import { DataSource } from 'typeorm';
import { User } from './entities/User.js';

export const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "",
    password: "",
    database: "goodreadsclone",
    entities: [User],
    synchronize: true
})