import axios from "axios";
import {toast} from 'react-toastify';

export const createOrders = async(token, order) => {
    try {
        await axios.post(`https://shopezy-api.onrender.com/auth/user/createOrder`, order, {
            headers: {Authorization: token}
        })
    } catch (error) {
        toast.error(error.response.data.msg)
    }
}