const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gql`
    type Query{
        greeting: String        
    }
`;

const resolvers = {
    Query:{
        greeting: () => 'Hello World!'
    }
};

const server = new ApolloServer({typeDefs, resolvers});
server.listen({port:8080})
    .then((serverInfo)=>{
        console.log(serverInfo.url);
    })



