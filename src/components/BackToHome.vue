<template>
    <router-link to="/" id="backToHome">
        <font-awsome-icon :icon="['fas', 'arrow-left']" />
        <span class="linkText">Back to Home</span>
    </router-link>
</template>

<script>
export default {
    name: 'BackToHome'
}
</script>

<style scoped>
#backToHome {
    color: slategray;
}

.linkText {
    margin-left: 7px;
}
</style>
