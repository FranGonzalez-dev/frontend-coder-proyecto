import { useDispatch, useSelector } from 'react-redux';
import { ecommerceApi } from '../api';
import { onLoadCart, onAddToCart, onCleanCart } from '../store';
import Swal from 'sweetalert2';

export const useCartStore = () => {
    const dispatch = useDispatch()
    const { cart, cid } = useSelector( state => state.carts )

    const getCart = async () => {
        
        try {
            const { data } = await ecommerceApi.get('/carts')
            
            dispatch( onLoadCart( data ))
        } catch (error) {
            console.log(error);
            console.log('Error al cargar el carrito.')
        }
    }

    const addToCart = async ( product ) => {
        console.log(cart)
        try {
            const { data } = await ecommerceApi.post(`/carts/${ product._id }`)
            console.log(data);
            dispatch( onAddToCart({ ...product }))
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
            await ecommerceApi.delete('/carts')
            dispatch( onCleanCart())
        } catch (error) {
            console.log(error);
            console.log('Error al vaciar el carrito.')
        }
    }

    const deleteFromCart = async ( id ) => {
        try {
            const { data } = await ecommerceApi.delete(`/carts/${ id }`)
            console.log(data);
        } catch (error) {
            console.log(error);
            console.log('Error al eliminar del carrito.')
        }
    }


    const purchaseProducts = async () => {
        try {
            const { data } = await ecommerceApi.post(`/carts/${ cid }/purchase`)
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