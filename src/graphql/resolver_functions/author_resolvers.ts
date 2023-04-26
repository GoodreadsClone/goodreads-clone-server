import { PostgresDataSource } from "../../databaseconfig.js"
import { Author } from "../../entities/Author.js"
import { Book } from "../../entities/Book.js"

export const findAuthorById = async (id: number) => {
    try {
        const author = await PostgresDataSource
        .createQueryBuilder(Author, 'author')
        .where('author.id = :id', {id: id})
        .getOne()

        return author

    } catch(e) {
        return e
    }
}

export const getAllBooksByAuthorId =async (authorId: number) => {
    try {
        const books = await PostgresDataSource
        .createQueryBuilder(Book, 'book')
        .leftJoinAndSelect('book.author', 'author')
        .where('author.id = :authorId', {authorId: authorId})
        .getMany()

        return books
    } catch(e) {
        return e
    }
}