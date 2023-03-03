const typeDefs = `#graphql
    type Mutation {
        makeTodo(title: String!): String
    }        
`;

export default typeDefs;
