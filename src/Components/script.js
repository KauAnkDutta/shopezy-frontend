import axios from "axios";
import { toast } from "react-toastify";

// const API_ENDPOINT = "http:localhost:5300/auth";

export const stripePay = async(data) => {
    try {
        await axios.post(`https://shopezy-api.onrender.com/auth/user/stripe/payment`,{
            headers: {'Content-Type': 'application/json'},
            data
        }).then(response => {
            return response
        }).catch(error => toast.error(error.response.data.msg))
    } catch (error) {
        toast.error(error.response.data.msg)
    }
}