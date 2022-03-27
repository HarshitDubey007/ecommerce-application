import axios from "axios";

const api = axios.create({
  // baseURL: "https://testapi.myfastearn.in/api/",
  baseURL: "http://localhost:3000/api/",
  headers: {},
});


export default api;




// import axios from "axios";

// const api = axios.create({
//     baseURL: 'https://api.coingecko.com/api/v3'

// })


// const apiCall = axios.create({
//     baseURL: 'http://localhost:5000'
    
// })


// //export default allURL;
// export const {chartapi, baseapicall} = { chartapi: api , baseapicall : apiCall}