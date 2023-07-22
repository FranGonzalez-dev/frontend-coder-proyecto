import { configureStore } from "@reduxjs/toolkit";
import { productsSlice, authSlice, uiSlice, cartsSlice } from './'

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        carts: cartsSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})