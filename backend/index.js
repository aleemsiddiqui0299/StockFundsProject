
const express = require('express')
const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const { typeDef, resolvers } = require('./schema')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//uncomment to test the models locally
// const { Equities } = require('./mongodb-conn')

async function startServer(){

const app = express();
app.use(bodyParser.json());
app.use(cors());
// Connecting to mongodb server
await mongoose.connect('YOUR_MONGODB_CONNECTION_STRING',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const server = new ApolloServer({
    typeDefs: typeDef,
    resolvers: resolvers
});

await server.start();
app.use('/graphql', expressMiddleware(server));


// api to be used later = https://www.alphavantage.co/
app.listen(8000, ()=>console.log('Server connected at 8000 port'));    
}

//uncomment to start graphql server with mongodb integrated resolvers
startServer();





