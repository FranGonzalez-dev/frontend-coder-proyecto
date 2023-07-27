import { useDispatch, useSelector } from 'react-redux';
import { useAuthStore } from './useAuthStore';
import { ecommerceApi } from '../api';
import { onLoadCart, onAddToCart, onCleanCart } from '../store';
import Swal from 'sweetalert2';



export const useCartStore = () => {

    const dispatch = useDispatch()
    const { user } = useAuthStore()
    const { cart } = useSelector( state => state.carts )

    const getCart = async () => {
        try {
            const { data } = await ecommerceApi.get(`/carts/${ user?.cid }`)
            dispatch( onLoadCart( data ))
        } catch (error) {
            console.log(error);
            console.log('Error al cargar el carrito.')
        }
    }

    const addToCart = async ( pid ) => {
        try {
            const { data } = await ecommerceApi.post(`/carts/${ user.cid }/product/${ pid }`)

            dispatch( onLoadCart( data ))
            
            Swal.fire({
                title: 'Producto agregado al carrito',
                icon: 'success',
                showConfirmButton: false,
                timer: 1000
            })
        } catch (error) {
            console.log(error);
            console.log('Error al agregar al carrito.')
        }
    }

    const cleanCart = async () => {
        try {
            await ecommerceApi.delete(`/carts/${ user.cid }`)
            dispatch( onCleanCart())

            Swal.fire({
                title: 'Carrito vaciado.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1000
            })
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error al vaciar el carrito.',
                icon: 'error',
                showConfirmButton: false,
                timer: 1000
            })
        }
    }

    const deleteFromCart = async ( pid ) => {
        try {
            const { data } = await ecommerceApi.delete(`/carts/${ user?.cid }/product/${ pid }`)
            dispatch( onLoadCart( data ))
            Swal.fire({
                title: 'Producto eliminado del carrito',
                icon: 'success',
                showConfirmButton: false,
                timer: 1000
            })
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error al eliminar del carrito.',
                icon: 'error',
                showConfirmButton: false,
                timer: 1000
            })
        }
    }

    const purchaseProducts = async () => {
        try {
            const { data } = await ecommerceApi.post(`/carts/${ user?.cid }/purchase`)
            console.log( data );
            await cleanCart()
            Swal.fire({
                title: 'Compra realizada.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1000
            })
        } catch (error) {
            console.log(error);
            console.log('Error al procesar la compra.')
        }
    }

    return {
        cart, 
        getCart, addToCart, deleteFromCart, cleanCart, purchaseProducts
    }
}