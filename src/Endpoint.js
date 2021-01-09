import axios from 'axios'

const token = localStorage.getItem("token")

const instance = axios.create({
    // SERVICE DEV
    baseURL: 'http://52.163.218.136:8282',

    // SERVICE LIVE
    //baseURL: 'http://po.bisku.id:8282',

    // SERVIVE MNC
    // baseURL: 'http://192.168.1.7:8282',

    // SERVICE BASEMENT
    // baseURL: 'http://192.168.0.185:8282',
    headers: {
        // "access-control-allow-origin" : "*",
        'Authorization': "Bearer " + token
    }
});

export default instance;
