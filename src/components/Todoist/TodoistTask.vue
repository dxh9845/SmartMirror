<template>
    <div class="task ml-4">
       <p class="name d-inline">{{taskTitle}}</p>
       <time v-if="taskDueDate && taskDueDate.datetime" class="due-date ml-2 p-2">
           <i class="far fa-calendar mr-1 black-border"></i>
           {{ taskDueDate.datetime | moment("M/D @ hh:mmA") }}
        </time>
       <time v-else-if="taskDueDate && taskDueDate.date" class="due-date ml-2 p-2">
           <i class="fas fa-calendar"></i>
           due {{ taskDueDate.date | moment("from", "now") }}
        </time>
    </div>
</template>

<script>
    
    export default {
        name: 'TodoistTask',
        methods: {},
        props: {
            taskTitle: String,
            taskDueDate: [Date, String, Object]
        },
        data() {
            return {
            }
        }
    }
</script>


<style lang="scss" scoped>
    .task {

        .due-date {
            background-color: #FFF;
            color: #000;
            font-size: 1.2em;
            font-weight: 700;
            letter-spacing: 0px;
            font-family: 'Franklin Gothic Demi';
        }
        

        .name {
            font-family: 'Franklin Gothic Book';
            font-size: 1.5em;
        }
    }

</style>


