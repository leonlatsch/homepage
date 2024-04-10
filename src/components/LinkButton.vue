<template>
    <a class="responsive area" rel="noopener" :href="url" target="_blank" :style="boxStyle">
        <font-awsome-icon class="icon responsive" :icon="icon" />
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
        color: String
    },
    methods: {
        altText: function (title) {
            return title + " Icon";
        }
    },
    computed: {
        boxStyle() {
            return {
                "background-color": this.color
            }
        }
    }
}
</script>

<style scoped>
.area {
    display: inline-block;
    cursor: pointer;
    width: auto;
    height: 25px;
    color: white;

    padding: 5px 10px 2px 10px;
    margin: 5px 5px 0 0;
    border-radius: 5px;
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

    .area.responsive {
        height: 40px;
        padding: 2px 8px 2px 8px;
        margin: 7px;
    }

    .area.responsive svg {
        display: none;
    }

    .area.responsive span {
        margin: 0;
        font-size: 1rem;
        text-decoration: underline;
        padding: 10px;
    }
}
</style>
