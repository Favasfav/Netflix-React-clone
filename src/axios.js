import axios from 'axios'
import {baseurl} from './constatnts/constatnts'
const instance = axios.create({
    baseURL: baseurl,
    
  });
  export default instance