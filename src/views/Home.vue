<template>
    <div class="home">
        <div class="description responsive">
            <p>{{ $t('views.home.introduction') }}</p>
        </div>

        <!-- Social Media -->

        <LinkButton :icon="['fab', 'twitter']" text="Twitter" url="https://twitter.com/leonlatsch" color="#007faa" />

        <LinkButton :icon="['fab', 'reddit-alien']" text="Reddit" url="https://www.reddit.com/u/leonlatsch"
            color="#db3b00" />

        <LinkButton :icon="['fab', 'twitch']" text="Twitch" url="https://twitch.tv/leonlatsch" color="#9147ff" />

        <LinkButton :icon="['fab', 'youtube']" text="YouTube"
            url="https://www.youtube.com/channel/UCuHlotm527Csanl_EoevnqQ" color="#ee0000" />

        <LinkButton :icon="['fab', 'github']" text="GitHub" url="https://github.com/leonlatsch" color="#3c4146" />

        <!-- Projects -->

        <Project :title="$t('views.home.projects.esp32.title')"
            :description="$t('views.home.projects.esp32.description')" image="esp32.png" smallImage="esp32.png"
            background="linear-gradient(to right, #000000, #434343)" textColor="white"
            github="https://github.com/leonlatsch/HT611-01_ESP32" />

        <Project :title="$t('views.home.projects.photok.title')"
            :description="$t('views.home.projects.photok.description')" image="photok.png" smallImage="photok-small.png"
            background="linear-gradient(to right, #319f99, #50C9C3)" textColor="white"
            github="https://github.com/leonlatsch/photok"
            gplay="https://play.google.com/store/apps/details?id=dev.leonlatsch.photok&utm_source=website"
            fdroid="https://f-droid.org/packages/dev.leonlatsch.photok" />

        <Project :title="$t('views.home.projects.kolibri.title')"
            :description="$t('views.home.projects.kolibri.description')" image="kolibri.png"
            smallImage="kolibri-small.png" background="linear-gradient(to right, #11998e, #38ef7d)" textColor="white"
            github="https://github.com/leonlatsch/kolibri" website="https://kolibri.leonlatsch.dev"
            download="https://github.com/leonlatsch/kolibri/releases/latest" />

        <Project :title="$t('views.home.projects.kolibri-server.title')"
            :description="$t('views.home.projects.kolibri-server.description')" image="kolibri-server.png"
            smallImage="kolibri-server-small.png" background="linear-gradient(to left, #093028, #11998e)"
            textColor="white" github="https://github.com/leonlatsch/kolibri-server"
            website="https://kolibri.leonlatsch.dev"
            download="https://github.com/leonlatsch/kolibri-server/releases/latest" />

        <Project :title="$t('views.home.projects.godaddy-dyndns.title')"
            :description="$t('views.home.projects.godaddy-dyndns.description')" image="godaddy-dyndns.png"
            smallImage="godaddy-dyndns-small.png" background="linear-gradient(to right, #0f0c29, #302b63, #24243e)"
            textColor="white" github="https://github.com/leonlatsch/godaddy-dyndns" />

        <Project :title="$t('views.home.projects.scrypt.title')"
            :description="$t('views.home.projects.scrypt.description')" image="scrypt.png" smallImage="scrypt-small.png"
            background="linear-gradient(to right, #ed213a, #93291e)" textColor="white"
            github="https://github.com/leonlatsch/scrypt"
            download="https://github.com/leonlatsch/scrypt/releases/latest" />

        <Project :title="$t('views.home.projects.scrypt-lite.title')"
            :description="$t('views.home.projects.scrypt-lite.description')" image="scrypt-lite.png"
            smallImage="scrypt-lite-small.png" background="linear-gradient(to left, #131628, #434343)" textColor="white"
            github="https://github.com/leonlatsch/scrypt-lite"
            download="https://github.com/leonlatsch/scrypt-lite/releases/latest" />

    </div>
</template>

<script>
import LinkButton from '../components/LinkButton'
import Project from '../components/Project'

export default {
    name: 'Home',
    components: {
        LinkButton,
        Project
    }
}
</script>

<style scoped>
.description {
    /* Margin for description text */
    display: flex;
    margin-bottom: 30px;
    font-size: 1rem;
}

.heart {
    width: 20px;
}



/* Responsive for smaller than 420px. */
@media only screen and (max-width: 420px) {
    .message.responsive {
        font-size: 1rem;
    }

    .description.responsive {
        font-size: 0.9rem;
    }
}
</style>
