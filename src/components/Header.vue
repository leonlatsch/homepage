<template>
    <diV id="header">
    <router-link to="/" tag="div" id="link">
        <img class="logo" alt="Rose Logo" src="../assets/rose.png"/>
        <h1 class="heading responsive">{{ $t('components.header.title') }}</h1>
    </router-link>
    <LanguageSwitcher/>
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
    display: flex;
}

#link { /* Sort content horizontaly */
    cursor: pointer;
    display: flex;
}

.logo { /* Logo circle */
    align-self: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #1d9fef;
}

/* responsive for smalle rthan 420px- */
@media only screen and (max-width: 420px) {
    .heading.responsive {
        font-size: 2rem;
    }
}

.heading { /* Font settings for heading */
    margin: 10px;
    font-size: 3rem;
    font-weight: 100;
}
</style>