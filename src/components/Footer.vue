<template>
    <div id="footer">
        <span>
            <span @click="scrollToTop()"><router-link class="a" to="/imprint">{{$t('components.footer.imprint') }}</router-link></span>
            &bull;
            <span>{{ $t('components.footer.copyright') }}</span>
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