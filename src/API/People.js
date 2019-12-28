import {baseURL} from './URL'

const routs = {
    get: 'people/',
    login: 'people/login'
}
export class People {

    login(user) {
        return fetch(`${baseURL}${routs.login}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    }

    get() {
        return fetch(`${baseURL}${routs.get}`, {
            method: 'GET'
        });
    }

    getUser(id) {
        return fetch(`${baseURL}${routs.get}${id}`)
              .then(res => res.json())
    }
    
    register(user) {
        return fetch(`${baseURL}${routs.get}`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })     
    }
}

export default People