import React, {useContext, createContext, useReducer, useState, useEffect} from "react";
import axios from 'axios'

import useUserFetch from "./API/UserApi";
import UseUserOrder from "./API/fetchOrders";

export const DataLayerContext = createContext();

export default function DataLayer({reducer, initialState, children}){
    // const [atoken, setAToken] = useState('')
    const {userData, isLogged} = useUserFetch(localStorage.getItem("AccessToken"))
    const {order} = UseUserOrder(localStorage.getItem("AccessToken"))


    if(order){
        initialState.orders = [...order]
    }

    // pushing the user date to the context
    if(Object.keys(userData).length > 1 ){
        initialState.user = userData
        initialState.isLoggedIn = isLogged
    }

    // useEffect(() => {
    //     if(localStorage.getItem("UserLogged")){
    //         const accessToken = async() => {
    //             const res = await axios.get(`/auth/refreshToken`);
    //             setAToken(res.data.accessToken);
    //             initialState.token = res.data.accessToken;
    //         }

    //         accessToken();
    //     }
    // }, [])

    return(
        <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
        </DataLayerContext.Provider>
    )    
};

export const useDataLayervalue = () => useContext(DataLayerContext);