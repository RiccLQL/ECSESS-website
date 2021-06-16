import axios from 'axios';

function config(): void {
    axios.defaults.baseURL = /*process.env.VUE_APP_API_URL*/ 'http://localhost:8081' + "/api/user";
}

export default config;