import { PostgresDataSource } from '../../databaseconfig.js'
import { Book } from '../../entities/Book.js';
import { findAuthorById } from './author_resolvers.js';

export const addBook = async (title: string, isbn: string, authorId: number, rating: number) => {
    try {
        const author = await findAuthorById(authorId)

        if(!author) {
            throw new Error('Author with this id does not exist, create the author first')
        }
        
        const book = await PostgresDataSource
        .createQueryBuilder()
        .insert()
        .into(Book)
        .values([{
            title: title,
            isbn: isbn,
            rating: rating,
            author: author
        }])
        .returning('*')
        .execute()
        return book.raw[0]

    } catch(e) {
        return e
    }
}

export const getAllBooks = async () => {
    try {
        const books = await PostgresDataSource
        .getRepository(Book)
        .find()

        return books
    } catch(e) {
        return e
    }
}

export const getBookById = async (id: number) => {
    try {
        const book = await PostgresDataSource
        .createQueryBuilder(Book, 'book')
        .where('book.id = :id', {id: id})
        .getOne()

        return book
    } catch(e) {
        return e
    }
}



