import { createSlice } from '@reduxjs/toolkit';

export const cartsSlice = createSlice({
    name: 'carts',
    initialState: {
        isLoadingCart: true,
        cart: [],
    },
    reducers: {
        onLoadCart: ( state, { payload }) => {
            state.cart = payload.result.products;
            state.isLoadingCart = false
        },
        onAddToCart: ( state, { payload }) => {
            console.log(payload)
        },
        onCleanCart: ( state ) => {
            state.cart = []
        }
    }
});


export const { onLoadCart, onAddToCart, onCleanCart } = cartsSlice.actions;