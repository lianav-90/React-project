import People from './People';
import Posts from './Posts'

class myAPI {
    constructor() {
        this.people = new People();
        this.posts = new Posts()
    }
}

const API = new myAPI();
export default API