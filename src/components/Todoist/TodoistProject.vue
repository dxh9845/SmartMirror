<template>
    <b-container fluid>
        <h2 class="p-2 m-0">Todoist</h2>
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

    export default {
        name: 'TodoistProject',
        components: {
            TodoistTask
        },
        methods: {
            filterProjects(project) {
                return ["Personal", "Inbox", "Work", "School"].includes(project.name);
            },
        },
        data() {
            return {
                projects: null
            }
        },

        created() {
            let headersObj = {
                "Authorization": `Bearer ${process.env.TODOIST_API_TOKEN}`
            }
            fetch(process.env.TODOIST_API_ENDPOINT + '/projects', {
                headers: headersObj
            })
            .then( res => { return res.json() })
            .then( jsonRes => {
                console.log(jsonRes)
                this.projects = jsonRes.filter(this.filterProjects);

                // Now call todoist for tasks
                return fetch(process.env.TODOIST_API_ENDPOINT + '/tasks', {
                    headers: headersObj
                })
            })
            .then( res => { return res.json() })
            .then( jsonRes => {
                console.log(jsonRes);
                this.projects.forEach(project => {
                    let projTasks = jsonRes.filter( task => { return project.id == task.project_id })
                    project.tasks = projTasks;
                });
                this.projects = this.projects.filter(p => { return p.tasks.length != 0});
            })
            .catch( err => console.error(err))
        }
    }
</script>


<style lang="scss" scoped>
    h2 {
        font-weight: 100;
        letter-spacing: 2px;
        font-family: 'OstrichSansHeavy', 'Arial Narrow', Arial, sans-serif;
        text-align: center;
        color: #FFF;
    }

    h3 {
        font-weight: 200;
        font-family: "OstrichSansHeavy";
        letter-spacing: 2px;
    }

    .proj {
        color: #FFF;
        background-color: transparent;
        border-radius: 0px;
    }
</style>


