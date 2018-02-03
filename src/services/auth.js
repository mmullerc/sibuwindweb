import store from '../store'

export default {
    authenticate: function (email, password) {
        signin(email, password,
            function signinSuccess() {
                console.log('Successfully Logged In');
                window.location.href = 'ride.html';
            },
            function signinError(err) {
                alert(err);
            }
        );
    }
    var poolData = {
            UserPoolId: _config.cognito.userPoolId,
            ClientId: _config.cognito.userPoolClientId
        };

        var userPool;

        if (!(_config.cognito.userPoolId &&
              _config.cognito.userPoolClientId &&
              _config.cognito.region)) {
            $('#noCognitoMessage').show();
            return;
        }

        userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

        if (typeof AWSCognito !== 'undefined') {
            AWSCognito.config.region = _config.cognito.region;
        }

    function signin(email, password, onSuccess, onFailure) {
        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
            Username: toUsername(email),
            Password: password
        });

        var cognitoUser = createCognitoUser(email);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: onSuccess,
            onFailure: onFailure
        });
    }

}
