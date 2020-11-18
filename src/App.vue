<template>
  <div id="app">
    <div class="content">
      <Header/>
      <router-view id="content"/>
      <Footer/>
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap');

#app { /* Font and default stuff from vue */
  font-family: 'Inconsolata', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-color: #1a1a1a;
  color: white;
  margin: 0 10px;
}

.content {
  /* Center content as block */
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
</style>
