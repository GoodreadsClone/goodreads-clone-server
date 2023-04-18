const books = [
    {
      id: '1',
      title: 'The Awakening',
      authorName: 'Kate Chopin',
    },
    {
      id: '2',
      title: 'City of Glass',
      authorName: 'Paul Rohan',
    },
];

export const resolvers = {
    Query: {
      books: () => books,
      
      book: (parent, args) => {
        const id = args.id
        return books.find(book => book.id === id)
      }
    },
};
