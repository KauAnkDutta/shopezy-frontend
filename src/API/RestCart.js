import axios from "axios";
import {toast} from 'react-toastify';

export const restCart = async(token) => {
    try {
        await axios.get(`https://shopezy-api.onrender.com/auth/restCart`, {
            headers: { Authorization: token}
        })
    } catch (error) {
        toast.error(error.response.data.msg)
    }
}