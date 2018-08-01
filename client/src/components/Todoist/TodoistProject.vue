<template>
    <b-container fluid>
        <h2 class="p-2 m-0 marquee">Todoist</h2>
        <b-row>
            <b-col md="6"
                    v-for="proj in projects" 
                    v-bind:data="proj" 
                    v-bind:key="proj.id">
                <b-alert class="proj" 
                    show variant="dark" >
                    <h3>{{ proj.name }}</h3>
                    <keep-alive>
                    <todoist-task v-for="task in proj.tasks"
                        v-bind:key="task.id"
                        v-bind:taskTitle="task.content"
                        v-bind:taskDueDate="task.due">
                    </todoist-task>
                    </keep-alive>
                </b-alert>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import TodoistTask from './TodoistTask';
    import TodoistAPI from '../../services/TodoistAPI'

    export default {
        name: 'TodoistProject',
        components: {
            TodoistTask
        },
        data() {
            return {
                projects: null
            }
        },
        mounted() {
            this.getProjects()
        },
        methods: {
            async getProjects() {
                const projResponse = await TodoistAPI.fetchProjects();
                this.projects = projResponse.data;
            } 
        }
        
    }
</script>


<style lang="scss" scoped>
    h2.marquee {
        letter-spacing: 2px;
        font-family: 'OstrichSansBold', 'Arial Narrow', Arial, sans-serif;
        text-align: center;
        color: #FFF;
    }

    h3 {
        font-weight: 200;
        font-family: "OstrichSansBlack";
        letter-spacing: 2px;
    }

    .proj {
        color: #FFF;
        background-color: transparent;
        border-radius: 0px;
    }
</style>


