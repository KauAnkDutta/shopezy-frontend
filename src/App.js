import React, {useEffect, useState} from 'react';
import Home from './Components/Home';
import Header from './Components/Header'
import Checkout from './Components/Checkout';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';
import StripePage from './Components/StripePage';
import ReturnOrder from './Components/ReturnOrder';
import ProductPage from './Components/ProductPage';
import axios from 'axios';
import {useDataLayervalue} from './DataLayer'
import './App.css'

import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
function App(){
  const [{token}] = useDataLayervalue();

  const [items, setItems] = useState([])
  const [addedItems, setAddedItems] = useState([])

  const get_cart_Items = async() => {
    if(localStorage.getItem("AccessToken")){
      try {
        await axios.get(`https://shopezy-api.onrender.com/auth/getItems`, {
          headers: {Authorization: localStorage.getItem("AccessToken")}
        }).then(res => {
          setItems(res.data.items)
          setAddedItems(res.data.items)
        }).catch(err => toast.error(err.response.data.msg))
      } catch (error) {
        toast.error(error.response.data.msg)
      }
    }
  }

  useEffect(() => {
    const createCart = async() => {
      try {
        if(localStorage.getItem("AccessToken")){

          await axios.post(`https://shopezy-api.onrender.com/auth/createCart`,[],{
            headers: {Authorization: localStorage.getItem("AccessToken")}
          })
        }
      } catch (error) {
        toast.error(error.response.data.mag)
      }
    }

    createCart()
  }, [localStorage.getItem("AccessToken")])

  // gets called only once when the user logs in
  useEffect(() => {
    if(localStorage.getItem("AccessToken")){
      get_cart_Items()
    }
  },[localStorage.getItem("AccessToken")])

  // gets call when items are add or removed from the cart
  useEffect(() => {
    if(items?.length !== addedItems?.length){
      get_cart_Items()
    }
  }, [items?.length, addedItems?.length ])

  return(
    <div>
      <BrowserRouter>
      <Header items={items}/>
      <ToastContainer autoClose={1500} position={"bottom-center"} theme={'dark'} style={{width: "auto"}}/>
        <div className='app'>
          <Routes>
            <Route path={`/login`} element={< Login />}/>
            <Route path={`/register`} element={< Register />}/>
            <Route path={`/returnOrder`} element={ <ReturnOrder/>}/>
            <Route path={`/`} element={<Home/>}/>
            <Route path={`/checkout`} element={<Checkout items={items} setItems={setItems}/>}/>
            <Route path={`/stripeCheckoutForm`} element={<StripePage items={items} addedItems={addedItems} setAddedItems={setAddedItems}/>}/>
            <Route path={`/productpage`} element={<ProductPage addedItems={addedItems} setAddedItems={setAddedItems}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;