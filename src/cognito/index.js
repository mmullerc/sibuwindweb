import Vue from 'vue'
import CognitoAuth from './cognito'
import config from './cognito.config'

Vue.use(CognitoAuth, config)

export default new CognitoAuth()
