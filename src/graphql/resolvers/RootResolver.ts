import {mergeResolvers} from "graphql-tools";
import {UserResolver} from './UserResolver'
import {DisposeResolver} from './DisposeResolver';
import {GarbageCollectorResolver} from "./GarbageCollectorResolver";

export const RootResolver = mergeResolvers([UserResolver, GarbageCollectorResolver, DisposeResolver]);
