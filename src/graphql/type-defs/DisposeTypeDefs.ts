import {gql} from 'apollo-server-express';

export const DisposeTypeDefs = gql`
    type Query {
        disposeDetails:[disposes!]
    }
    
    type disposes{
        _id:ID!
        user_id:ID!
        date:String
        no_of_bottles:Int!
        bin_id:ID!
    }
`;