const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const {resolvers} = require('./graphql/resolvers');
const {typeDefs} = require('./graphql/typeDefs');
const mongoose = require('mongoose');

const MONGODB = "mongodb+srv://bharti:bharti@cluster0.n5kkknd.mongodb.net/?retryWrites=true&w=majority";
const PORT = 3000;
console.log("inside db")
mongoose.set('strictQuery', true);
mongoose.connect(MONGODB)
.then(()=>{
    console.log("MongoDB Connection Successful");
})

const app = express();

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
