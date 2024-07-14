import axios from 'axios';
const API_URL = 'http://localhost:8080/user/flights';

const getToken = () => {
    return sessionStorage.getItem('token');
};

export const getFlights = async() => {
    const token = getToken();
    console.log(token);
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    try {
        const response = await axios.get(API_URL, { headers });
        return response;
    } catch (error) {
        console.error('Error fetching flights:', error);
        throw error;
    }
}

export const getFlightByorigindest = async(origin: string,destination: string) =>{
    const token = getToken();
    console.log(token);
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    try {
        const response = await axios.get(API_URL+"/search",{params:{origin,destination} ,headers });
        return response;
    } catch (error) {
        console.error('Error fetching flights:', error);
        throw error;
    }
}


export const getFlightById = async(flightId:string) => {
    const url = `${API_URL}/${flightId}`;
    const token = getToken();
    console.log(token);
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    try {
        const response = await axios.get(url, { headers });
        return response;
    } catch (error) {
        console.error('Error fetching flights:', error);
        throw error;
    }
};

