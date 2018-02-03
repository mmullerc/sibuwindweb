<template>
  <b-navbar v-if="isAuthenticated" class="main-menu" toggleable="md" type="dark" variant="dark">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="#">SibuWind</b-navbar-brand>
  <b-collapse is-nav id="nav_collapse" class="menu-links">
    <b-navbar-nav class="ml-auto my-2 my-sm-0">
      <b-nav-item>
        <router-link to="/">Home</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/windfarms">Windfarms</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/inspections">Inspections</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/components">Components</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/companyusers">Users</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/settings">Settings</router-link>
      </b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>

<script>
import store from '../store'

export default {
  data()  {
    return {
      isAuthenticated : false
    }
  },
  created() {
    console.log(this.isAuthenticated);
    if (store.getters.isAuthenticated) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }
}

</script>

<style lang="scss">
@import '../../node_modules/bootstrap/scss/bootstrap.scss';
@import '../styles/custom-bootsrap.scss';
.menu-links a {
  display: inline-block;
  text-decoration: none;
  color: white;
  margin-right: 10px;
}
.main-menu {
  background-color: #FFBA5C;
}
</style>
