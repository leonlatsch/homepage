<template>
    <a id="area" class="responsive" :href="url" target="_blank" :style="boxStyle">
        <font-awsome-icon v-if="gplay === false" class="icon responsive" :icon="icon"/>
        <span v-if="gplay === false" class="text responsive">{{ text }}</span>
        <img v-if="gplay" class="gplay" src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
    </a>
</template>

<script>
export default {
    name: 'LinkButton',
    props: {
        icon: Array,
        text: String,
        url: String,
        color: String,
        borderColor: String,
        textColor: String,
        gplay: Boolean
    },
    methods: {
        altText: function(title) {
            return title + " Icon";
        }
    },
    computed: {
        boxStyle() {
            if (this.gplay) {
                return null
            }
            return {
                "background-color": this.color,
                "color": this.textColor,
                "border-color": this.borderColor,
                "border-radius": ".5rem",
                "border-style": "solid",
                "border-width": "3px",
                "padding": "5px 10px 2px 10px",
                "margin": "5px 5px 0px 0px"
            }
        }
    }
}
</script>

<style scoped>
#area {
    display: inline-block;
    cursor: pointer;
    width: auto;
    height: 25px;
}

.icon {
    vertical-align: middle;
    display: inline-block;
    align-self: center;
    width: 18px;
    height: 18px;
}

.text {
    vertical-align: middle;
    display: inline-block;
    margin-left: 5px;
    font-weight: 500;
}

.gplay {
    vertical-align: middle;
    display: inline-block;
    height: 4rem;
    width: auto;
}

@media only screen and (max-width: 420px) {
    .text.responsive {
        font-size: 0.9rem;
    }

    .icon.responsive {
        width: 15px;
        height: 15px;
    }

    .gplay.responsive {
        
    }

    #area.responsive {
        height: 20px;
        padding: 2px 8px 2px 8px;
    }
}
</style>