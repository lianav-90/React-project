import {baseURL} from './URL'

const routs = {
    get: 'people/',
    login: 'people/login'
}
class People {
    login(body) {
        return fetch(`${baseURL}${routs.login}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }

    get() {
        return fetch(`${baseURL}${routs.get}`, {
            method: 'GET'
        });
    }

    getUser(userId) {
        return fetch(`${baseURL}${routs.get}${userId}`, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json'
            }
        });
    }
    register(inputs) {
        return fetch(`${baseURL}${routs.get}`, {
            method: "POST",
            body: JSON.stringify(inputs),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status === 200 || response.status === 201) return response.json();
                else {console.log("Email or Password is incorrect")}
        })
        .then((data) => {
           return data
        })
        
    }
}

export default People