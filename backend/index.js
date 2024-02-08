
const express = require('express')
const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const cors = require('cors')
const bodyParser = require('body-parser')
const { Products } = require('./mongodb-conn')

async function startServer(){

app = express();
app.use(bodyParser.json());
app.use(cors);

// const server = new ApolloServer({typeDefs: "", resolvers: ""});
// await server.start();

// app.use('/graphql', expressMiddleware(server));

// api to be used later = https://www.alphavantage.co/
app.listen(5000, ()=>console.log('Server connected at 5000 port'));    
}







