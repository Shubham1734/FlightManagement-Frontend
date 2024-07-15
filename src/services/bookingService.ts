import axios from 'axios';
const API_URL = 'http://localhost:8080/user/bookings';
const getToken = () => {
    return sessionStorage.getItem('token');
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addbooking = async(flightId:any, userid:any) => {
    const token = getToken();
    console.log(token);
    const headers = {
        'Authorization': `Bearer ${token}`,
    }
    try {
        const response = await axios.post(`${API_URL}?flightId=${flightId}&userid=${userid}`, {}, { headers });
        return response;
    } catch (error) {
        console.error('Error adding flight:', error);
        throw error;
    }
}