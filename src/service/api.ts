import axios from 'axios';


const api = axios.create({
   // headers:{ Authorization: `Bearer ${token}`},
    baseURL: "https://boraverapi.herokuapp.com/",
    //headers:{ Authorization: `Bearer ${token}`},
 },
);




export default api;