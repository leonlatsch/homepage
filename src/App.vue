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
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import i18n from '@/i18n'

export default {
  name: "app",
  components: {
    Header,
    Footer
  },
  mounted() {
    let lang = navigator.language
    if (lang === "de") {
      i18n.locale = "de"
    } else {
      i18n.locale = "en"
    }
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
