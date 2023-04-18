import { DataSource } from 'typeorm';
import { User } from './entities/User.js';
import { Author } from './entities/Author.js';
import { Book } from './entities/Book.js';
import { Comments } from './entities/Comments.js';
import { BucketList } from './entities/BucketList.js';
import { History } from './entities/History.js';

export const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "",
    password: "",
    database: "goodreadsclone",
    entities: [User, Author, Book, Comments, BucketList, History],
    synchronize: true
})