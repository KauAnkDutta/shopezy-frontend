export const initialState = {
    basket: [],
    orders: [],
    user: null,
    isLoggedIn: false,
    token: ""
};

// selector
export const getBasketTotal = (basket) => 
    basket?.reduce((amt, item) => (item.price*item.quantity)+amt, 0)


const reducer = (state, action) => {
    // console.log(typeof(action.payload));
    switch(action.type) {
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket, action.payload],
            };

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex((item) => item.id === action.id)
            
            let newBasket = [...state.basket];

            if(index >=0){
                newBasket.splice(index,1)
            }else{
                console.warn(`Can't remove product(id: ${action.id}) as its not in the basket`)
            }

            return{
                ...state,
                basket: newBasket,
            }
        
        default:
            return state;
    }
};

export default reducer;