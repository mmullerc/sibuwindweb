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
          <b-button class="login-btn" @click="login()" variant="outline-primary">Login</b-button>
        </b-row>
        <b-row class="login-btn-div">
          <b-button class="login-btn" @click="signUpTest()" variant="outline-primary">Sign up test</b-button>
        </b-row>
    </b-card>
  </div>
</template>

<script>

import store from '../store';
import 'vue-awesome/icons/sign-in';
import 'vue-awesome/icons/user-circle';
import 'vue-awesome/icons/lock';
import authService from '../services/auth'

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
  mounted() {
    var el = document.getElementsByTagName('html')[0];
    el.style.backgroundColor = '#2783DE';
    var el2 = document.getElementsByClassName('page')[0];
    el2.style.backgroundColor = '#2783DE';
  },
  beforeDestroy() {
     var el = document.getElementsByTagName('html')[0];
     el.style.backgroundColor = 'white';
     var el2 = document.getElementsByClassName('page')[0];
     el2.style.backgroundColor = 'white';
  },
  methods: {
    authenticate() {
      var payload = {
        email : this.loginEmail,
        passwrod : this.loginPassword
      }
      authService.authenticate(payload);
    },
    signUpTest() {
      authService.signUp();
    },
    login () {
      this.$cognitoAuth.signin(this.loginEmail, this.loginPassword, (err, result) => {
        console.log('error' + err)
        console.log('result' + result)

        if (err) {
          this.error = err
          console.error(err)
          console.log('error?');
        } else {
          console.log(result);
          router.push({ name: 'HomePage' })
        }
      })
    }
  }
}
</script>

<style>
/* .htmlColor {
  background-color: #2783DE;
} */
/*
  html {
    background-color: #2783DE;
  }
  .app {
    background-color: #2783DE;
  } */
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
