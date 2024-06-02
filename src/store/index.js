import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState={cartItems:[],totalPrice:0,totalAmount:0}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
                state.cartItems=[...state.cartItems,action.payload]
                state.totalPrice+=Math.floor(action.payload.price)
                state.totalAmount++
        }
    }
})

const store=configureStore({
    reducer:cartSlice.reducer
})

export const cartActions=cartSlice.actions
export default store