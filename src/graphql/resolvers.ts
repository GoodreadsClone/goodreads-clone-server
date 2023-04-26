import {
    addBookToBucketList,
    addCurrentlyReading,
    addUser,
    findUserByEmail,
    getUserBucketList,
    getUserById,
    getUserCurrentlyReadying
} from './resolver_functions/user_resolvers.js';
import {
    addBook, 
    getAllBooks, 
    getBookById, 
    getAuthorByBookId,
    
} from './resolver_functions/book_resolvers.js';
import { 
    findAuthorById,
    getAllBooksByAuthorId 
} from './resolver_functions/author_resolvers.js';

export const resolvers = {
    Query: {
        book: async (parent, {id}) => {
            return await getBookById(id)
        },

        user: async (parent, {email}) => {
            return await findUserByEmail(email)
        },

        userById: async (parent, {userId}) => {
            return await getUserById(userId)
        },

        author: async (parent, {id}) => {
            return await findAuthorById(id)
        },

        books: async () => await getAllBooks(),
    },

    Mutation: {
        addUser: async (parent, {firstName, lastName, email, password}) => {
            return await addUser(firstName, lastName, email, password)
        },

        addBook: async (parent, {title, isbn, authorId, rating}) => {
            return await addBook(title, isbn, authorId, rating)
        },

        addBookToBucketList: async (parent, {userId, bookId}) => {
            return await addBookToBucketList(userId, bookId)
        },

        addCurrentlyReading: async (parent, {userId, bookId}) => {
            return await addCurrentlyReading(userId, bookId)
        }
    },

    User: {
        wantToReads: async (parent) => {
            return await getUserBucketList(parent.id)
        },

        currentlyReading: async (parent) => {
            return await getUserCurrentlyReadying(parent.id)
        }
    },

    BucketList: {
        user: async (parent) => {
            return await getUserById(parent.userId)
        },
        book: async (parent) => {
            return await getBookById(parent.bookId)
        }
    },

    Book: {
        author: async (parent) => {
            return await getAuthorByBookId(parent.id)
        }
    },

    Author: {
        books: async (parent) => {
            return await getAllBooksByAuthorId(parent.id)
        }
    }
};
