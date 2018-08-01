import ExpressAPI from './ExpressAPI'

export default {
    fetchProjects() {
        return ExpressAPI().get('todoist');
    }
}