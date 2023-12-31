import { useEffect } from "react";
import { useCartStore } from "../../hooks"




export const Cart = () =>{

    const { cart, deleteFromCart, getCart, cleanCart, purchaseProducts } = useCartStore()

    useEffect(() => {
        getCart()
    }, []);
    
    return (
        <section className="p-2 flex flex-col justify-center items-center w-full min-h-screen animate__animated animate__fadeIn" style={{ maxWidth: '900px' }}>
            
            {
                cart === 'no-data' || cart.length === 0
                ? 
                <div className="alert bg-neutral text-white w-1/2 animate__animated animate__fadeIn">
                    <i className="ri-information-line text-2xl"></i>
                    <span>El carrito está vacío.</span>
                </div>
            : 
                <>
                    <h1 className="text-2xl text-center mb-10">
                        Carrito
                    </h1>
                    <div className="self-end my-4 flex flex-row gap-2">
                        <button className="btn btn-error" onClick={ async () => await cleanCart() }>
                            Vaciar carrito
                        </button>
                        <button className="btn btn-success" onClick={ purchaseProducts }>
                            Pagar
                        </button>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th> Producto </th>
                                <th> Título </th>
                                <th> Cantidad </th>
                                <th> Precio unitario </th>
                                <th> Precio total </th>
                                <th> Acciones </th>
                            </tr>
                        </thead>
                        <tbody>


                            { cart?.map( item  => (
                                <tr key={ item.product?._id }>
                                    <td className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={ item.product?.thumbnail } alt={ item.product?.title }/>
                                        </div>
                                    </td>
                                    <td>{ item.product?.title }</td>
                                    <td>{ item.quantity }</td>
                                    <td>{ item.product?.price }</td>
                                    <td>{ item.totalPrice }</td>
                                    <td>
                                        <button onClick={ async () => await deleteFromCart( item.product?._id ) } className="btn btn-outline btn-error">
                                            <i className="ri-delete-bin-6-fill"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            }
        </section>
    )
}