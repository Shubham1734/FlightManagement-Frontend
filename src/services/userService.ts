import axios from 'axios';
const API_URL = 'http://localhost:8080/auth';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registerUser = (user: any) => {
    return axios.post(`${API_URL}` + "/signup", user);
};

export const loginUser = (username : string, password : string) => {
    return axios.post(`${API_URL}` + "/login", {username, password});
}

const apiforuser = 'http://localhost:8080/user/getuser';
const getToken = () => {
    return sessionStorage.getItem('token');
};
export const getUser = async(username:string) =>{
    const token = getToken();
    console.log(token);
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    try {
        const response = await axios.get(apiforuser, {params:{username}, headers });
        return response;
    } catch (error) {
        console.error('Error fetching flights:', error);
        throw error;
    }
}