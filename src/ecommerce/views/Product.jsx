import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useProductsStore, useCartStore, useAuthStore } from "../../hooks"

import { Loader } from "../../layout"
import Swal from "sweetalert2"

export const Product =  () => {
    
    const { user } = useAuthStore()
    const { id } = useParams()
    const { getProductById, selectedProduct } = useProductsStore()
    const [isLoading, setIsLoading] = useState(true);

    const { addToCart } = useCartStore()

    const onAddToCart = async ( product ) => {
        await addToCart( product )
        Swal.fire({
            title: 'Producto agregado al carrito',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000
        })
    }
    
    useEffect(() => {
        setIsLoading(true); // Establecer isLoading a true antes de iniciar la carga del producto
    
        const fetchProduct = async () => {
          try {
            await getProductById(id);
            setIsLoading(false); // Establecer isLoading a false cuando la carga del producto ha finalizado
          } catch (error) {
            console.log(error);
            console.log('Error al cargar el producto.');
            setIsLoading(false); // Establecer isLoading a false en caso de error
          }
        };
    
        fetchProduct();
      }, [ id ]);

    return (
        <>
        
        {
            isLoading ? <Loader />
            :
            <div className="min-h-screen flex items-center justify-center bg-base-100 mx-auto">
                <div className="hero-content flex-col lg:flex-row gap-4">
                    <img src={ selectedProduct.thumbnail } className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold"> { selectedProduct.title } </h1>

                        <div className="flex items-center gap-x-6 my-4">
                            <p className="text-2xl text-primary font-bold">${ selectedProduct.price }</p>
                            <p className="text-sm font-semibold">Stock: {selectedProduct.stock} unidad(es)</p>
                        </div>


                        {
                            user?.role === 'user' && 
                            <button className="btn btn-neutral normal-case btn-wide" onClick={ () => onAddToCart( selectedProduct._id )}>
                                Añadir al carrito
                            </button>
                        }
                        
                        <p className="py-6">{selectedProduct.description}</p>
                    </div>
                </div>
            </div>
            
        }
        </>
    )
}