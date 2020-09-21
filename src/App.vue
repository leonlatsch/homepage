<template>
  <div id="app">
    <Header/>
    <router-view id="content"/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* Roboto Import: All sizes ant styles */
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

#app { /* Font and default stuff from vue */
  font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* Center content as block */
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
</style>
