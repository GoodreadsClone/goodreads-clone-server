import { DataSource } from 'typeorm';
import { User } from './entities/User.js';
import { Author } from './entities/Author.js';
import { Book } from './entities/Book.js';
import { Comments } from './entities/Comments.js';
import { BucketList } from './entities/BucketList.js';
import { History } from './entities/History.js';

import * as dotenv from 'dotenv';

dotenv.config()

export const PostgresDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: "goodreadsclone",
    entities: [User, Author, Book, Comments, BucketList, History],
    synchronize: true
})
