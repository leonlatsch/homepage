<template>
    <div id="languageSwitcher" class="responsive">
        <a href="?lang=de" :class="{active: $i18n.locale == 'de', inactive: $i18n.locale == 'en'}">DE</a>
         | 
        <a href="?lang=en" :class="{active: $i18n.locale == 'en', inactive: $i18n.locale == 'de'}">EN</a>
    </div>
</template>

<script>
export default {
    name: 'LanguageSwitcher',
    computed: {
        inactive() {
            return {
                "color": "darkgrey"
            }
        }
    }
}
</script>

<style scoped>
#languageSwitcher {
    font-weight: bold;
    font-size: .85rem;
}

.active {
    color: white;
}

.inactive {
    color: darkgrey;
}

/* Responsive for smaller than 420px */
@media only screen and (max-width: 420px) {
    #languageSwitcher.responsive {
        font-size: .75rem;
    }
}
</style>