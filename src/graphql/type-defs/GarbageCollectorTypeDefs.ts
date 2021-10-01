import {gql} from 'apollo-server-express'

export const GarbageCollectorTypeDefs = gql`
    type Query{
        binDetails(area:String!):[Bin!]!
    }
    
    type Mutation{
        setBinEmpty(_id:ID!):Bin!
    }
    
    type Bin{
        _id:ID!
        area:String!
        bottle_count:Int
        status:Boolean!
    }
 
`;
