import axios from 'axios';
const API_URL = 'http://localhost:8080/admin/flight';

const getToken = () => {
    return sessionStorage.getItem('token');
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addFlight = async(flight : any) =>{
    const token = getToken();
    console.log(token);
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    try {
        const response = await axios.post(API_URL, flight, { headers });
        return response;
    } catch (error) {
        console.error('Error adding flight:', error);
        throw error;
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateFlight = async(id:string,flight:any) =>{
    const token = getToken();
    console.log(token);
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    try {
        const response = await axios.put(`${API_URL}/${id}`,flight,{ headers });
        return response;
    } catch (error) {
        console.error('Error adding flight:', error);
        throw error;
    }
}


export const deleteFlight = async(id:number) => {
    const token = getToken();
    console.log(token);
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    try {
        const response = await axios.delete(`${API_URL}/${id}`,{ headers });
        return response;
    } catch (error) {
        console.error('Error adding flight:', error);
        throw error;
    }
}


const apiforusers = 'http://localhost:8080/admin/users';

export const getUsers = async() => {
    const token = getToken();
    console.log(token);
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    try {
        const response = await axios.get(apiforusers, { headers });
        return response;
    } catch (error) {
        console.error('Error fetching flights:', error);
        throw error;
    }
}

const apiforbookings = 'http://localhost:8080/admin/bookings';
export const getAllBookings = async() => {
    const token = getToken();
    console.log(token);
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    try {
        const response = await axios.get(apiforbookings, { headers });
        return response;
    } catch (error) {
        console.error('Error fetching flights:', error);
        throw error;
    }
}