export const response = (statusCode: number, body: any = {}) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  body: JSON.stringify(body)
})

export const generatePolicy = (
  principalId: any,
  effect: any,
  resource: any
) => {
  const authResponse: any = {}
  authResponse.principalId = principalId
  if (effect && resource) {
    const policyDocument: any = {}
    policyDocument.Version = '2012-10-17'
    policyDocument.Statement = []
    const statementOne: any = {}
    statementOne.Action = 'execute-api:Invoke'
    statementOne.Effect = effect
    statementOne.Resource = resource
    policyDocument.Statement[0] = statementOne
    authResponse.policyDocument = policyDocument
  }
  return authResponse
}
