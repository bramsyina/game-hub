import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1480f06ffdac4e57a507d62537cb5527'
    }
})