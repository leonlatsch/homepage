<template>
    <div id="languageSwitcher" class="responsive">
        <span @click="setDe()" class="localeButton" :class="{active: $i18n.locale == 'de', inactive: $i18n.locale == 'en'}">DE</span>
        <span class="pipe">|</span>
        <span @click="setEn()" class="localeButton" :class="{active: $i18n.locale == 'en', inactive: $i18n.locale == 'de'}">EN</span>
    </div>
</template>

<script>
import i18n from '../i18n'

export default {
    name: 'LanguageSwitcher',
    methods: {
        setEn() {
            console.log("en")
            i18n.locale = "en"
        },
        setDe() {
            console.log("de")
            i18n.locale = "de"
        }
    },
    computed: {
        
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

.pipe {
    margin: 0 2px;
}

.localeButton {
    cursor: pointer;
}

/* Responsive for smaller than 420px */
@media only screen and (max-width: 420px) {
    #languageSwitcher.responsive {
        font-size: .75rem;
    }
}
</style>