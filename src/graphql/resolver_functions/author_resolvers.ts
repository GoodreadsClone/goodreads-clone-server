import { PostgresDataSource } from "../../databaseconfig.js"
import { Author } from "../../entities/Author.js"

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