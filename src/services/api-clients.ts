import axios from "axios"

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '1b6b0543fd8946ba92d46a65ceda945e'
    }
})