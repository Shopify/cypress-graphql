export const hasOperationName = (req: any, operationName: string) => {
  const {body} = req;

  // If the req body is a collection of operations, analyze the first operation
  const normalizedBody = Array.isArray(body) && body.length ? body[0] : body;

  // Standard use case - operationName is included in the req body
  /* eslint-disable-next-line no-prototype-builtins */
  if (normalizedBody.hasOwnProperty('operationName')) {
    return normalizedBody.operationName === operationName;
  }
  // Edge case - some packages include API calls that don't - so check the query body instead
  /* eslint-disable-next-line no-prototype-builtins */
  if (normalizedBody.hasOwnProperty('query')) {
    return normalizedBody.query.includes(operationName);
  }
  return false;
};
