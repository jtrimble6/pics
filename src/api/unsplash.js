import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID NjJOBvH5iJXN7Qn99MkxEL25Nz7-xT_EAwnPxsy5qVY'
    }
})