import { useDispatch, useSelector } from "react-redux";
import { ecommerceApi } from "../api";
import { onLoadProducts, onSelectedProduct, onUpdateProduct } from "../store";
import Swal from "sweetalert2";

export const useProductsStore = () => {
    const dispatch = useDispatch()
    const { products, isLoadingProducts, selectedProduct, isLoadingSelectedProduct } = useSelector( state => state.products )

    const startLoadingProducts = async () => {
        try {
            const { data } = await ecommerceApi.get('/products')
            dispatch( onLoadProducts( data ))
        } catch( error ) {
            console.log(error);
            console.log('Error al cargar los productos.');
        }
    }

    const getProductById = async ( id ) => {
        try {
            const { data } = await ecommerceApi.get(`/products/${ id }`)
            dispatch( onSelectedProduct( data ))
        } catch( error ) {
            console.log(error);
            console.log('Error al cargar el producto.');
        }
    }

    const startSavingProduct = async( product ) => {
        try {
            if( product._id ){
                // Actualización
                await ecommerceApi.put(`/products/${ product._id }`, product );
                dispatch( onUpdateProduct({ ...product }));
                return
            }
        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error')
        }
    }

    return {
        // Propiedades
        products, isLoadingProducts, selectedProduct, isLoadingSelectedProduct,
        // Métodos
        startLoadingProducts, getProductById, startSavingProduct
    }
}
