<template>
    <div class="d-flex justify-content-center p-2" id="clock">
        <h1 class="time display-1 shadow" v-text="currentTime"></h1>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'Clock',
        methods: {
            updateCurrentTime() {
                this.currentTime = moment().format('LTS');
            }
        },
        data() {
            return {
                currentTime: null
            }
        },
        created() {
            var _this = this;
            this.currentTime = moment().format('LTS');
            setInterval( () => _this.updateCurrentTime(), 1000);
        }
    }
</script>


<style lang="scss" scoped>
    h1.time {
        color: #FFF;
    }
</style>


