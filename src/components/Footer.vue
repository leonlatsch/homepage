<template>
    <div id="footer">
        <span>
            <div class="copyright">
                {{ $t('components.footer.copyright') }}
            </div>
            <span @click="scrollToTop()"><router-link class="link" to="/imprint">{{ $t('components.footer.imprint')
                    }}</router-link></span>
            &bull;
            <span @click="scrollToTop()"><router-link class="link" to="/privacy_policy">{{
                $t('components.footer.privacy_policy') }}</router-link></span>
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
    padding: 10px 0px 10px 0px;
}

.link {
    color: inherit;
}

.copyright {
    margin-bottom: 1px;
}
</style>
