import {baseURL} from './URL'

const endPoint = 'posts';

class Posts {
    get() {
        return fetch(`${baseURL}${endPoint}`)
    }
    getUserPosts(id) {
        return fetch(`${baseURL}people/${id}/${endPoint}`)
    }
}

export default Posts