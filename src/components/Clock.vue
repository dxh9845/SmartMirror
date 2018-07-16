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
                this.currentTime = moment().format('hh:mm A');
            }
        },
        data() {
            return {
                currentTime: null,
            }
        },
        created() {
            var _this = this;
            this.currentTime = moment().format('hh:mm A');
            setInterval( () => _this.updateCurrentTime(), 1000);
        }
    }
</script>


<style lang="scss" scoped>
    .time {
        color: #FFF;
        font-weight: 400;
        // font-family: "OstrichSansMedium";
    }
</style>


