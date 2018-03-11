<template>
<div class="app">
  <div class="header">
  <Menu></Menu>
  </div>
  <div class="page">
    <router-view></router-view>
    <div class="help-text">
    </div>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import Menu from './components/Menu';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

export default {
  components: {
    Menu,
    Footer
  },
  name: 'app',
  created() {
    var el = document.getElementsByTagName('html')[0];
    el.style.backgroundColor = 'white';
    console.log(el);
     var el2 = document.getElementsByClassName('page')[0];
     console.log(el2)
     el2.style.backgroundColor = 'white';
     console.log(el2)
  }
}
</script>

<style>
body {
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
}
.htmlColor {
  background-color: white;
}
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
}

.header {
  border-bottom: 1px solid #b3b3b3;
  width: 100%;
}

.page {
  width: 100%;
  padding: 30px 50px;
}

.help-text {
  margin-top: 20px;
  font-size: 12px;
}
@viewport{
    zoom: 1.0;
    width: extend-to-zoom;
}
</style>
