import axios from "axios"

const getUser = (token)=>{
    const data = axios.get('https://api.tda24.ir/users/profile',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then(res=>res.data.data)
    return data
}
export default getUser