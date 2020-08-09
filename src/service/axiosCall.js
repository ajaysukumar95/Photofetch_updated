import axios from 'axios';

const baseUrl='https://picsum.photos/v2/list?limit=300';

class axiosService{
    //fetch image from API
    static imageGridFetchcall(){
        return axios.get(baseUrl)
    }
}

export default axiosService;