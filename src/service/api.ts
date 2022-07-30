import axios from 'axios';


const api = axios.create({
   // headers:{ Authorization: `Bearer ${token}`},
    //baseURL: "https://boraverapi.herokuapp.com/",
    baseURL: "http://localhost:8000/",
    //headers:{ Authorization: `Bearer ${token}`},
 },
);




export default api;