import React, {useState, useEffect} from "react";
import {toast} from 'react-toastify';
import axios from "axios";

function useUserOrder(token){
    const [order, setOrder] = useState(null)

    useEffect(() => {
        if(token){
            const getUserOrder = async() => {
                try {
                    const res = await axios.get(`https://shopezy-api.onrender.com/auth/user/readOrders`, {
                        headers: {Authorization: token}
                    })
                    
                    setOrder(res.data.orders)
                } catch (error) {
                    toast.error(error.response?.data?.msg)
                }
            }

            getUserOrder()
        }
    }, [token])

    return{
        order
    }

}

export default useUserOrder;
