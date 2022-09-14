<template>
  <div id="app">
    <main-menu />
    <div class="main container">
      <left-menu />
      <div class="wrapper-narrow">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue';
import LeftMenu from '@/components/LeftMenu.vue';
import 'vueperslides/dist/vueperslides.css';

export default {
  name: 'AppLayout',

  components: {
    MainMenu,
    LeftMenu,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/normalize.scss";

@import url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i&display=swap&subset=cyrillic');

ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

a {
  text-decoration: none;
}

a:visited {
  color: #1C1C1E;
}

#app {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #1C1C1E;
}

h1, .h1 {
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
}

h2 {
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
}

h3 {
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
}

.caption {
  font-size: 14px;
  line-height: 21px;
  color: #6F6F71;
}

.note {
  color: #6F6F71;
}

.link-regular {
  font-size: 14px;
  line-height: 21px;
  text-decoration: underline;
}

.link-primary {
  color: #0D5CF0;

  &:visited {
    color: #0D5CF0;
  }
}

.link-secondary {
  color: #3D3D3E;

  &:visited {
    color: #3D3D3E;
  }
}

.d-flex {
  display: flex;
}

.container {
    display: flex;
    // align-items: center;
    margin: 0 auto;
    height: 100%;
}

.container {
  width: 1290px;
  max-width: 100%;
}

.main {
  padding-top: 40px;
}

.wrapper-narrow {
  margin-left: 30px;
  width: 100%;
}

.narrow-content {
  margin-right: 30px;
  width: 630px;
}
</style>
