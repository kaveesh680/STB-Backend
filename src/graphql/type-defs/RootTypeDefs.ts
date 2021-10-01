import {UserTypeDefs} from './UserTypeDefs'
import {GarbageCollectorTypeDefs} from './GarbageCollectorTypeDefs';
import {DisposeTypeDefs} from './DisposeTypeDefs';
import {mergeTypeDefs} from "graphql-tools";

export const rootTypeDefs = mergeTypeDefs([UserTypeDefs, GarbageCollectorTypeDefs, DisposeTypeDefs]);