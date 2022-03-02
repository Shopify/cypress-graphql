import {hasOperationName} from './hasOperationName';
// Alias mutation if operationName matches
export const aliasMutation = (req: any, operationName: string) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Mutation`;
  }
};
