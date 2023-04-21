import { PostgresDataSource } from '../../databaseconfig.js'
import { User } from '../../entities/User.js';

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

export const findUserByEmail = async (email: number) => {
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

