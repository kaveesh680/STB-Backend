import {IResolvers} from "graphql-tools";
import {ForbiddenError} from "apollo-server-express";
import {BinModel} from "../../database/model/BinModel";


export const GarbageCollectorResolver: IResolvers = {
    Query: {
        binDetails: async (_, args: { area: string }, context: { user: string }) => {
            if (context.user === "garbageCollector") {
                let binDetails;
                binDetails = await BinModel.find({area: args.area});
                return binDetails;
            } else {
                throw new ForbiddenError("No Access, Only garbage Collectors");
            }
        }
    },
    Mutation: {
        setBinEmpty: async (_, args: { _id: string }, context: { user: string }) => {
            if (context.user === "garbageCollector") {
                let bin;
                bin = await BinModel.findOneAndUpdate({_id: args._id}, {status: false, bottle_count:0}, {new: true});
                return bin;
            } else {
                throw new ForbiddenError("No Access, Only Garbage Collectors");
            }
        }
    }
}