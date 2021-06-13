import axios from 'axios';

function config(): void {
    axios.defaults.baseURL = process.env.API_URL + "/api/user";
}

export default config;