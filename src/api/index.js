import axios from "axios";

export class Index {
    constructor(url) {
       this.url = url
        console.log(url)
    }

    async fetchVideos() {
        return axios.get(`${this.url}/videos`)
            .then((response) => response.data)
    }
}

export default new Index(process.env.VUE_APP_BASE_API_URL)
