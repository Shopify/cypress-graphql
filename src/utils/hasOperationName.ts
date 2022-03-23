export const hasOperationName = (req: any, operationName: string) => {
  const {body} = req;
  // Standard use case - operationName is included in the req body
  /* eslint-disable-next-line no-prototype-builtins */
  if (body.hasOwnProperty('operationName')) {
    return body.operationName === operationName;
  }
  // Edge case - some packages include API calls that don't - so check the query body instead
  /* eslint-disable-next-line no-prototype-builtins */
  if (body.hasOwnProperty('query')) {
    return body.query.includes(operationName);
  }
  return false;
};
