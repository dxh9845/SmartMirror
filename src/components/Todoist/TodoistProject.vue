<template>
    <b-container>
        <h4 class="p-2">Todoist</h4>
        <b-row>
            <b-col sm="6"
                    v-for="proj in projects" 
                    v-bind:data="proj" 
                    v-bind:key="proj.id">
                <b-alert class="proj" show variant="dark" >
                    {{ proj.name }}
                </b-alert>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    
    export default {
        name: 'TodoistProject',
        methods: {
        },
        data() {
            return {
                projects: null
            }
        },
        created() {

            fetch(process.env.TODOIST_API_ENDPOINT, {
                headers: {
                    "Authorization": `Bearer ${process.env.TODOIST_API_TOKEN}`
                }
            })
            .then( res => { return res.json(); })
            .then( jsonRes => {
                console.log(jsonRes)
                this.projects = jsonRes;
            })
            .catch( err => console.error(err))
        }
    }
</script>


<style lang="scss" scoped>
    h4 {
        font-weight: 100;
        text-align: center;
        color: #FFF;
    }
    .proj {
        color: #FFF;
        background-color: transparent;
        border-radius: 0px;
    }
</style>


