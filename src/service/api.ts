import axios from 'axios';

const token = localStorage.getItem('@BoraVer:token')
const api = axios.create({
    baseURL: "http://localhost:8000/",
    
    
       
    
},


);


export default api;