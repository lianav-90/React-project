import {baseURL} from './URL'

const endPoint = 'posts/';

class Posts {

    get() {
        return fetch(`${baseURL}${endPoint}`)
    }

    getUserPosts(id) {
        return fetch(`${baseURL}people/${id}/${endPoint}`)
    }

    set(post) {
      return fetch(`${baseURL}${endPoint}`, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    update(id, post) {
        return fetch(`${baseURL}${endPoint}${id}`, {
          method: "PUT",
          body: JSON.stringify(post),
          headers: {
            'Content-Type': 'application/json'
          }
        })
    }

    remove(id) {
        return fetch(`${baseURL}${endPoint}${id}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json'
          }
        })
    }
}

export default Posts