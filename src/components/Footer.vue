<template>
    <div id="footer">
        <span>
            <span>{{ $t('components.footer.copyright') }}</span>
            &bull;
            <span @click="scrollToTop()"><router-link class="a" to="/imprint">{{$t('components.footer.imprint') }}</router-link></span>
            &bull;
            <span @click="scrollToTop()"><router-link class="a" to="/privacy_policy">{{$t('components.footer.privacy_policy') }}</router-link></span>
        </span>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
}
</script>

<style scoped>
#footer {
    color: slategray;
    text-align: center;
    margin: 16px 0px 10px 0px;
}

.a {
    color: inherit;
}
</style>