import { PostgresDataSource } from '../../databaseconfig.js'
import { User } from '../../entities/User.ts';
import {Book} from '../../entities/Book.ts';
import {BucketList} from "../../entities/BucketList";

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


export const addBookToBucketList = async (userId:User, bookId:Book)=>{

    try {

        return  await PostgresDataSource
            .createQueryBuilder()
            .insert()
            .into(BucketList)
            .values([{
                userId : userId,
                bookId : bookId,
                timestamp :  new Date().toISOString()
            }])
            .returning('*')
            .execute()



    } catch(e) {
        return e
    }


}

