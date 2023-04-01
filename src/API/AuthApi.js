import axios from 'axios'
import {toast} from 'react-toastify'

export const registerUser = async(user) => {
    try {
        await axios.post(`https://shopezy-api.onrender.com/auth/register`, user)
            .then(res => {
                toast.success("User Registerd Successfully")
                window.location.href = `/login`
            }).catch(err => toast.error(err.response.data.msg))
    } catch (error) {
        toast.error(error.response.data.msg)
    }
}

export const loginUser = async(user) => {
    try {
        await axios.post(`https://shopezy-api.onrender.com/auth/login`, user)
            .then(res => {
                toast.success("Login Successfull")
                localStorage.setItem('UserLogged', true);
                localStorage.setItem("AccessToken", res.data.accessToken)
                console.log(res.data)
                window.location.href = `/`
            }).catch(error => toast.error(error.response.data.msg))
    } catch (error) {
        toast.error(error.response.data.msg)
    }
}