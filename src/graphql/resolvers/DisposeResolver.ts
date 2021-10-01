import {IResolvers} from "graphql-tools";
import {ForbiddenError} from "apollo-server-express";
import {DisposeModel} from '../../database/model/DisposeModel';

export const DisposeResolver:IResolvers = {
    Query:{
        disposeDetails:async (_,args:{}, context:{user_id:string}) => {
            if(context.user_id){
                const disposeDetails = await DisposeModel.find({user_id:context.user_id});
                return disposeDetails;
            }else {
                throw new ForbiddenError("No Access");
            }
        }
    }
}