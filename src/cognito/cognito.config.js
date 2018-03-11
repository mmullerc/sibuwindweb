export default {
  region: process.env.AWS_REGION,
  IdentityPoolId: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
  UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
  ClientId: process.env.AWS_COGNITO_CLIENT_ID
}
