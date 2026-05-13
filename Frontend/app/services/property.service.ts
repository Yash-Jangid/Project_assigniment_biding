import axios from "axios";

const API_URL = process.env.NEXT_APP_URL || "http://localhost:3000";

export const getProperties = async () => {
    const response = await axios.get(API_URL+'/properties');
    console.log('Repose GET =>>', response)
    return response.data;
}

export const createProperty = async (data: {
    name: string;
    city: string;
    pricePerNight: number;
    isActive: boolean;
}) => {
    const response = await axios.post(API_URL + '/properties', data);
    console.log('Repose POST =>>', response)

    return response.data;
}