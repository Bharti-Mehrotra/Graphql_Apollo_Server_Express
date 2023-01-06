import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/typeDefs';
// import { PORT } from '../config/config';
import mongoose from 'mongoose';

const MONGODB = "mongodb+srv://bharti:bharti@cluster0.n5kkknd.mongodb.net/?retryWrites=true&w=majority";
const PORT = 3000;
console.log("inside db")
mongoose.set('strictQuery', true);
mongoose.connect(MONGODB)
.then(()=>{
    console.log("MongoDB Connection Successful");
})
.then((res)=>{
    console.log("server running at ",res);
});

// const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

// server.applyMiddleware({ app });
let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();
app.get('/', (req, res) => {
    console.log("Apollo GraphQL Express server is ready");
});

app.listen({ port: PORT }, () => {
    console.log(`Server is running at http://localhost:3000${apolloServer.graphqlPath}`);
});