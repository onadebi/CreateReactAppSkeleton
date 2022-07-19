import axios, { AxiosResponse } from 'axios';
import appsettings from '../configs/appsettings';


axios.defaults.baseURL = appsettings.baseUrl;



const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string)=> axios.get<T>(url).then(responseBody)
}

const MakeRequest={
    list: ()=> requests.get<{}>(''),
}


const agent = {
    MakeRequest
}

export default agent;