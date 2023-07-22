import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        isLoadingProducts: true,
        products: [],
        isLoadingSelectedProduct: true,
        selectedProduct: null
    },
    reducers: {
        onLoadProducts: (state, { payload }) => {
            state.products = payload.result;
            state.isLoadingProducts = false;
        },
        onSelectedProduct: (state, { payload }) => {
            state.selectedProduct = null;
            state.selectedProduct = payload.result;
        },
        onAddNewProduct: (state, { payload }) => {
            state.products.push( payload ),
            state.selectedProduct = null;
        },
        onUpdateProduct: (state, { payload }) => {
            state.products = state.products.map( product => {
                if( product._id === payload._id ) {
                    return payload;
                }
                return product;
            })
        },
        onDeleteProduct: ( state ) => {
            if( state.selectedProduct ){
                state.products = state.products.filter( product => product._id !== state.selectedProduct._id );
                state.selectedProduct = null
            }
        }
    }
});


export const { 
    onLoadProducts, 
    onSelectedProduct,
    isLoadingProducts,
    isLoadingSelectedProduct,
    onAddNewProduct,
    onDeleteProduct,
    onUpdateProduct } = productsSlice.actions;