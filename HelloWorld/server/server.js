const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gql`

    schema{
        query: Sam
    }

    type Sam{
        greeting: String        
    }
`;

const resolvers = {
    Sam:{
        greeting: () => 'Hello World!'
    }
};

const server = new ApolloServer({typeDefs, resolvers});
server.listen({port:8080})
    .then((serverInfo)=>{
        console.log(serverInfo.url);
    })



