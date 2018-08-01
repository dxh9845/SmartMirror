import axios from 'axios'


export default() => {
    return axios.create({
        baseURL: `http://localhost:${process.env.CLIENT_PORT}`
    })
}