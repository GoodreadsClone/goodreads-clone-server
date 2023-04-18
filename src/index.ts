import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { resolvers } from './graphql/resolvers.js';
import { PostgresDataSource } from './databaseconfig.js';

PostgresDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!")
}).catch((err) => {
    console.error("Error during Data Source initialization", err)
})

const typeDefs = readFileSync('./src/graphql/schema.graphql', { encoding: 'utf-8' });

const server = new ApolloServer({
    typeDefs,
    resolvers,
}); 

const { url } = await startStandaloneServer(server, {
listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);