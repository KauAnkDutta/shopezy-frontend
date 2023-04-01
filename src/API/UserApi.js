import { toast } from 'react-toastify'
import {useState, useEffect} from 'react'
import axios from 'axios'

function useUserFetch(token){
    const [isLogged, setIsLogged] = useState(false)
    const [userData, setUserData] = useState([])

    useEffect(() => {

        if(token){
            const getUser = async() => {
                try {
                    const res = await axios.get(`https://shopezy-api.onrender.com/auth/user/userInfo`, {
                        headers: {Authorization: token}
                    })

                    setIsLogged(true)
                    setUserData(res.data.userInfo)
                } catch (error) {
                    toast.error(error.response.data.msg)
                }
            }
            getUser()
        }

    },[token])

    return {
        userData, isLogged
    }
}

export default useUserFetch;