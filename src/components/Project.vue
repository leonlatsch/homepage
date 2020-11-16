<template>
    <div id="projectContainer" class="responsive" :style="boxStyle">
        <div class="textdiv responsive">
            <h1 class="heading responsive">{{ title }}</h1>
            <p class="text responsive">{{ description }}</p>
            <span v-if="commingSoon" class="commingSoon">{{ $t('components.project.comming_soon') }}</span>
            <div class="buttons responsive">
                <LinkButton v-if="download != null" class="links" :icon="['fas', 'cloud-download-alt']" text="Download"
                :url="download"
                :textColor="textColor"
                :borderColor="textColor"/>
                <LinkButton v-if="github != null" class="links" :icon="['fab', 'github']" text="GitHub"
                :url="github"
                :textColor="textColor"
                :borderColor="textColor"/>
                <LinkButton v-if="website != null" class="links" :icon="['fas', 'globe-americas']" text="Website"
                :url="website"
                :textColor="textColor"
                :borderColor="textColor"/>
                <LinkButton v-if="gplay != null" class="links" gplay="true" :url="gplay"/>
            </div>
        </div>
        <div class="imgContainer responsive">
            <img class="img responsive" :src="getImgUrl(image)" :alt="altText()"/>
        </div>
    </div>    
</template>

<script>
import LinkButton from './LinkButton.vue'

export default {
    name: 'Project',
    components: {
        LinkButton
    },
    props: {
        title: String,
        description: String,
        image: String,
        background: String,
        textColor: String,
        github: String,
        website: String,
        download: String,
        gplay: String,
        height: String,
        commingSoon: Boolean
    },
    computed: {
        boxStyle() {
            let style = {
                background: this.background,
                color: this.textColor
            }

            if (this.height) {
                style.height = this.height
            }

            return style;
        }
    },
    methods: {
        getImgUrl: function(img) {
            var images = require.context('../assets/projects/', false);
            return images('./' + img);
        },
        altText: function() {
            return this.title + " project image";
        }
    }
}
</script>

<style scoped>
#projectContainer {
    margin-top: 20px;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    display: block;
    min-height: 160px;
    filter: drop-shadow(0 0 10px rgba(0,0,0,.2));
}

.img {
    width: 300px;
    object-fit: cover;
    object-position: 100% 0;
    filter: drop-shadow(0 0 20px rgba(0,0,0,.2));
}

.commingSoon {
    font-weight: bold;
    font-style: italic;
    filter: drop-shadow(0 0 12px rgba(0,0,0,.2))
}

/* Responsive for smaller than 825px */
@media only screen and (max-width: 825px) {
    .imgContainer.responsive {
        right: 0px;
        position: relative;
        margin: 30px;
    }
    .textdiv.responsive {
        margin: auto;
    }
    #projectContainer.responsive {
        text-align: center;
        max-height: 550px;
    }
}

/* Responsive for smaller than 420px */
@media only screen and (max-width: 420px) {
    .heading.responsive {
        font-size: 1.8rem;   
    }

    .text.responsive {
        font-size: 0.8rem;
    }

    .textdiv.responsive {
        max-width: 300px;
    }

    .imgContainer.responsive {
        margin: 10px;
    }

    .img.responsive {
        width: 250px;
    }

    #projectContainer.responsive {
        max-height: 450px;
    }
}

.imgContainer {
    top: 0;
    right: 35px;
    position: absolute;
    padding: 0;
    margin: 30px 30px 30px 5px;
}

.textdiv {
    margin: 30px 30px 30px 80px;
    width: 350px;
}

.links {
    margin: 5px 0px 5px 0px;
}
</style>