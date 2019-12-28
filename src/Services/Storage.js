class Storage {

    static set(key, data) {
        try {
            const value = JSON.stringify(data);
            localStorage.setItem(key, value);
        } catch(err) {
            console.log(err)
        }   
    }

    static get(key) {
        try {
            const response = localStorage.getItem(key);
            const data = JSON.parse(response) || null;
            return data;
        } catch(err) {
            console.log(err)
        }
    }

    static remove(key) {
        try {
            localStorage.removeItem(key);
        } catch(err) {
            console.log(err)
        }
    }
}

export default Storage