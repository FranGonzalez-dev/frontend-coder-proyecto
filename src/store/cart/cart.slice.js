import { createSlice } from '@reduxjs/toolkit';

export const cartsSlice = createSlice({
    name: 'carts',
    initialState: {
        isLoadingCart: true,
        cart: [],
        cid: null   //cart id
    },
    reducers: {
        onLoadCart: ( state, { payload }) => {
            state.cart = payload.result;
            state.cid = payload.cid
            state.isLoadingCart = false
        },
        onAddToCart: ( state, { payload }) => {
            state.cart.products.push( payload );
        },
        onCleanCart: ( state ) => {
            state.cart = []
        }
    }
});


export const { onLoadCart, onAddToCart, onCleanCart, cid } = cartsSlice.actions;