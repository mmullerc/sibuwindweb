import store from '../store'
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
  CognitoIdentityServiceProvider,
  adminUpdateUserAttributes } from 'amazon-cognito-identity-js';
  import AWS from 'aws-sdk';

export default {

  authenticate: function (payload) {

    //store.authenticate();

    console.log(payload);
    console.log(process.env.AWS_COGNITO_USER_POOL_ID);
    console.log(process.env.NODE_ENV);

    const cognitoUserPool = new CognitoUserPool({
      UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
      ClientId: process.env.AWS_COGNITO_CLIENT_ID
    });

    const authDetails = new AuthenticationDetails({
      Username: payload.email,
      Password: payload.password,
    });
    const cognitoUser = new CognitoUser({
      Pool: cognitoUserPool,
      Username: payload.email,
    });

    return new Promise((resolve, reject) => cognitoUser.authenticateUser(authDetails, {
      onFailure: (err) => {
        reject(err);
      },
      onSuccess: (session) => {
         console.log(session);
        // commit(types.AUTHENTICATE, constructUser(cognitoUser, session));
        // resolve({ userConfirmationNecessary });
      },
    }));
  },

  signUp : function () {
    //
    // register(email, password, onSuccess, onFailure);
    //
    // var onSuccess = function registerSuccess(result) {
    //     var cognitoUser = result.user;
    //     console.log('user name is ' + cognitoUser.getUsername());
    //     var confirmation = ('Registration successful. Please check your email inbox or spam folder for your verification code.');
    //     if (confirmation) {
    //         console.log('yay!');
    //     }
    // };
    // var onFailure = function registerFailure(err) {
    //     alert(err);
    // };
    //
    // function toUsername(email) {
    //     return email.replace('@', '-at-');
    // }
    //
    // function register(email, password, onSuccess, onFailure) {
    //   var dataEmail = {
    //           Name: 'email',
    //           Value: 'mmcpax@gmail.com'
    //       };
    //   var password = 'tibe12345';
    //   var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
    //
    //
    //   const cognitoUserPool = new CognitoUserPool({
    //     UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
    //     ClientId: process.env.AWS_COGNITO_CLIENT_ID
    //   });
    //
    //     cognitoUserPool.signUp(toUsername(email), password, [attributeEmail], null,
    //           function signUpCallback(err, result) {
    //               if (!err) {
    //                   onSuccess(result);
    //               } else {
    //                   onFailure(err);
    //               }
    //           }
    //       );
    // }


  AWS.config.update({region:'us-east-2'});
  AWS.config.credentials = new AWS.Credentials('AKIAJBVOTMVBMK2YOKNQ','tlUHYvuGB1d/hJPVVnk2/AcaujwJnhdHIc47dAhn');
  console.log(AWS.config.accessKeyId);
  let params = {
  UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
  Username: 'mmcpax@gmail.com',
  DesiredDeliveryMediums: ["EMAIL"],
  ForceAliasCreation: false,
  UserAttributes: [
    { Name: "given_name", Value: 'Mathias' },
    { Name: "family_name", Value: 'Muller'},
    { Name: "name", Value: 'Mathias' + " " + 'Muller'},
    { Name: "email", Value: 'mmcpax@gmail.com'}
  ],
};
let cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();
    cognitoIdentityServiceProvider.adminCreateUser(params, function(error, data) {
      if (error) {
        console.log("Error adding user to cognito: " + error, error.stack);
        reject(error);
      } else {
        // Uncomment for interesting but verbose logging...
        //console.log("Received back from cognito: " + CommonUtils.stringify(data));
        cognitoIdentityServiceProvider.adminUpdateUserAttributes({
          UserAttributes: [{
            Name: "email_verified",
            Value: "true"
          }],
          UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
          Username: 'mmcpax@gmail.com'
        }, function(err) {
          if (err) {
            console.log(err, err.stack);
          } else {
            console.log("Success!");
            resolve(data);
          }
        });
      }
    });
  }
}
