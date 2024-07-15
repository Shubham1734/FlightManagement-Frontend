import axios from 'axios';
const API_URL = 'http://localhost:8080/auth';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registerUser = (user: any) => {
    return axios.post(`${API_URL}` + "/signup", user);
};

export const loginUser = (username : string, password : string) => {
    return axios.post(`${API_URL}` + "/login", {username, password});
}