import axios from "axios"

axios.defaults.baseURL = "http://localhost:8000"
export const defaultAxios = async (url, method, data) => {
    console.log(`url : ${url}`)
    return await axios({
        method,
        url,
        data,
        headers: { "Content-Type": "application/json" },
    })
}
