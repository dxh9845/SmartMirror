import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/Navbar'
import TodoistProjects from '@/components/Todoist/TodoistProject'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            components: Navbar
        },
        {
            path: '/todoist',
            name: 'Todoist Projects',
            component: TodoistProjects
        }
    ]
})