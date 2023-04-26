import { PostgresDataSource } from '../../databaseconfig.js'
import { User } from '../../entities/User.js';
import { Book } from '../../entities/Book.js';
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

// This method needs to be optimized by modifying DB Schema
export const getUserBucketList = async (userId: number) => {
    try {
        const bucket_list = await PostgresDataSource
        .createQueryBuilder(BucketList, 'bucketlist')
        .leftJoinAndSelect("bucketlist.book", "book")
        .where('bucketlist.userId = :userId', {userId: userId})
        .getMany()

        let books = []
        bucket_list.forEach((item) => {
            books.push(item.book)
        })

        return books
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


        return { status: "SUCCESS" }
    } catch(e) {
        return { status: "FAILURE" }
    }
}

export const getUserCurrentlyReadying = async (userId: number) => {
    try {
        const user = await PostgresDataSource
        .createQueryBuilder(User, 'user')
        .leftJoinAndSelect("user.currentBook", "book")
        .where('user.id = :userId', {userId: userId})
        .getOne()

        return user.currentBook
    } catch(e) {
        return e
    }
}

export const getUserById = async (userId: number) => {
    try {
        console.log("here" + userId)
        const user = await PostgresDataSource
        .createQueryBuilder(User, 'user')
        .where('user.id = :id', {id: userId})
        .getOne()

        return user
    } catch(e) {
        return e
    }
}
