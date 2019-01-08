<template>
    <span>
        <h1 class='os-bold timer mb-0' v-text="currentTime"></h1>
    </span>
</template>

<script>
import * as moment from 'moment';

export default {
    name: 'current-time',
    data() {
        return {
            currentTime: null
        }
    },
    methods: {
        updateCurrentTime() {
            this.currentTime = moment().format("LTS");
        },
    },
    created() {
        this.currentTime = moment().format("LTS");
        // Update every second
        setInterval(() => this.updateCurrentTime(), 1 * 1000);
    }
}
</script>

<style>
.timer {
    color: #FFF;
    font-size: 3em;
}
</style>
