<template>

  <div class="login-page">
    <b-card class="login-card"
            border-variant="primary"
            header-bg-variant="primary"
            header-text-variant="white"
            style="max-width: 40rem;">
      <h3 class="login-header">
        SibuWind
      </h3>
        <b-row class="login-form">
          <b-col  class="mt-2" sm="10" lg="10">
          <b-input-group class="login-input">
            <b-input-group-button>
              <b-btn class="btn-icon"><icon name="user-circle"></icon></b-btn>
            </b-input-group-button>
            <b-input type="email"
                     placeholder="Email"
                     v-model="loginEmail">
            </b-input>
          </b-input-group>
          <b-input-group class="login-input">
            <b-input-group-button>
              <b-btn class="btn-icon"><icon name="lock"></icon></b-btn>
            </b-input-group-button>
            <b-input type="password"
                     placeholder="Password"
                     v-model="loginPassword">
            </b-input>
          </b-input-group>
         </b-col>
        </b-row>
        <b-row class="login-btn-div">
          <b-button class="login-btn" @click="authenticate()" variant="outline-primary">Login</b-button>
        </b-row>
    </b-card>
  </div>
</template>

<script>

import auth from '../services/auth';
import 'vue-awesome/icons/sign-in';
import 'vue-awesome/icons/user-circle';
import 'vue-awesome/icons/lock';

export default {
  data () {
    return {
      types: [
        'Email', 'Password'
      ],
      loginEmail : "",
      loginPassword : ""
    }
  },

  name: 'login',
  methods: {
    authenticate () {
      console.log(this.loginEmail);
      console.log(this.loginPassword);
    }
  }
}
</script>

<style>

  html {
    background-color: #2783DE;
  }
  .app {
    background-color: #2783DE;
  }
  .login-header {
    text-align: center;
    margin-bottom: 50px;
    color: #868e96;
  }
  .login-form {
    justify-content: center;
  }
  .login-input {
    margin-bottom: 15px;
  }
  .login-btn-div {
    justify-content: center;
  }
  .login-btn {
    width: 40%;
    margin-top: 40px;
  }
  .login-page {
    margin-left: 22%;
    margin-top: 10%;
  }
  @media screen and (max-width: 1080px) {
    .login-page {
      margin-left: 18%;
      margin-top:15%;
    }
  }
  @media screen and (max-width: 940px) {
    .login-page {
      margin-left: 10%;
      margin-top:20%;
    }
  }
  @media screen and (max-width: 840px) {
    .login-page {
      margin-left: 5%;
      margin-top:20%;
    }
  }
  @media screen and (max-width: 840px) {
    .login-page {
      margin-left: 0%;
      margin-top:20%;
    }
  }
  .btn-icon {
    width: 42px;
  }
</style>
