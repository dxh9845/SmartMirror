<template>
    <div class="d-flex justify-content-center align-items-center" id="clock">
        <h3 href="#" class="time m-0" v-text="currentTime"></h3>
    </div>
</template>

<script>
    import moment from 'moment';
    
    export default {
        name: 'Clock',
        methods: {
            updateCurrentTime() {
                this.currentTime = moment().format('hh:mmA');
            }
        },
        data() {
            return {
                currentTime: null,
            }
        },
        created() {
            var _this = this;
            this.currentTime = moment().format('hh:mmA');
            setInterval( () => _this.updateCurrentTime(), 1000);
        }
    }
</script>


<style lang="scss" scoped>
    .time {
        color: #FFF;
        font-weight: 500;
        // letter-spacing: 2px;
        // font-family: "OstrichSansBlack";
    }
</style>


