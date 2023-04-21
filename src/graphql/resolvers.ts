import { addUser, findUserByEmail, addBookToBucketList } from './resolver_functions/user_resolvers.js';
import { addBook, getAllBooks, getBookById } from './resolver_functions/book_resolvers.js';

export const resolvers = {
    Query: {      
      book: (parent, { id }) => {
        return getBookById(id)
      },

      user: (parent, { email }) => {
        return findUserByEmail(email)
      },

      books: () => getAllBooks(),

      
    },

    Mutation: {
      addUser: (parent, { firstName, lastName, email, password }) => {
        return addUser(firstName, lastName, email, password)
      },

      addBook: (parent, { title, isbn, authorId, rating }) => {
        return addBook(title, isbn, authorId, rating)
      },

      addBookToBucketList : (parent, {userId, bookId})=>{
          return addBookToBucketList(userId, bookId)
      }
    }
};
