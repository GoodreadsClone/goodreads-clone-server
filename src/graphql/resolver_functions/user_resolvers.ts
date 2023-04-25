import { PostgresDataSource } from '../../databaseconfig.js'
import { User } from '../../entities/User.js';
import { BucketList } from "../../entities/BucketList.js";
import { getBookById } from './book_resolvers.js';

export const addUser = async (firstName: string, lastName: string, email: string, password: string) => {
    try {
        const user = await PostgresDataSource
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([{
            firstName: firstName, 
            lastName: lastName, 
            email: email, 
            password: password 
        }])
        .returning('*')
        .execute()
        
        return user.raw[0]

    } catch(e) {
        return e
    }
}

export const findUserByEmail = async (email: string) => {
    try {
        const user = await PostgresDataSource
        .createQueryBuilder(User, 'user')
        .where('user.email = :email', {email: email})
        .getOne()
        return user

    } catch(e) {
        return e
    }
}


export const addBookToBucketList = async (userId:number, bookId:number)=>{
    try {
        const book = await getBookById(bookId)
        const user = await getUserById(userId)

        const bucket_list =  await PostgresDataSource
            .createQueryBuilder()
            .insert()
            .into(BucketList)
            .values([{
                user : user,
                book : book
            }])
            .returning('*')
            .execute()
        return bucket_list.raw[0]
    } catch(e) {
        return e
    }
}


export const addCurrentlyReading = async (userId: number, bookId: number)=>{
    try {
        const book = await getBookById(bookId)
        const user = await getUserById(userId)
        
        user.currentBook = book

        PostgresDataSource.manager.save(user)

        return user
    } catch(e) {
        return e
    }
}

export const getUserById = async (userId: number) => {
    try {
        const user = await PostgresDataSource
        .createQueryBuilder(User, 'user')
        .where('user.id = :id', {id: userId})
        .getOne()

        return user
    } catch(e) {
        return e
    }
}
