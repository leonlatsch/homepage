<template>
    <a id="area" class="responsive" :href="url" target="_blank" :style="colorStyle">
        <font-awsome-icon class="icon responsive" :icon="icon"/>
        <span class="text responsive">{{ text }}</span>
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
        textColor: String
    },
    methods: {
        altText: function(title) {
            return title + " Icon";
        }
    },
    computed: {
        colorStyle() {
            return {
                "background-color": this.color,
                "color": this.textColor,
                "border-color": this.borderColor
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
    border-radius: .5rem;
    padding: 5px 10px 2px 10px;
    margin: 5px 5px 0px 0px;

    /* Border Color gets sets by colorStyle */
    border-style: solid;
    border-width: 3px; 
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

@media only screen and (max-width: 420px) {
    .text.responsive {
        font-size: 0.9rem;
    }

    .icon.responsive {
        width: 15px;
        height: 15px;
    }

    #area.responsive {
        height: 20px;
        padding: 2px 8px 2px 8px;
    }
}
</style>