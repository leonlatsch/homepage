<template>
    <diV id="header">
        <router-link to="/" tag="div" class="link">
            <img class="logo" alt="Rose Logo" src="../assets/rose.png"/>
            <h1 class="responsive">{{ $t('components.header.title') }}</h1>
            <h3 class="message responsive">{{ $t('views.home.message') }}</h3>
        </router-link>
        <LanguageSwitcher class="langSwitcher"/>
    </diV>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher'

export default {
    name: 'Header',
    components: {
        LanguageSwitcher
    }
}
</script>

<style scoped>
#header {
    text-align: center;
    margin-bottom: 10px;
}

.link { /* Sort content horizontaly */
    cursor: pointer;
}

.logo { /* Logo circle */
    align-self: center;
    width: 100px;
    height: 100px;
    margin-top: 10px;
}

.message {
  font-size: 1.5rem;;
  text-align: center;
}

.langSwitcher {
    text-align: end;
}
</style>