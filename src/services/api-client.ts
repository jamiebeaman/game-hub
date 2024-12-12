import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '747c9b5af6e0449294f2b79d4db415e3'
    }
});