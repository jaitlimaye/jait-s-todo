import axios from "axios";

const baseURL = "http://localhost:8000/api/v1/todo";

class databaselink
{
    getdailytodo()
    {
        return axios.get(baseURL +`/daily`);
    }

    createdailytodo(data)
    {
        return axios.post(baseURL + '/daily',data);
    }

    deletetododaily(data)
    {
        return axios.delete(baseURL +`/daily`,{data});
    }
}

export default new databaselink();