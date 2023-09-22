import { Link } from "react-router-dom";
import { useProductsStore, useUiStore } from "../../../hooks"
import { ProductModal, AlertError, Button } from "../../../layout";


export const ControlPanel = () => {
    
    const { products } = useProductsStore()
    const { openModal } = useUiStore()

    return (
        <>
        <section className="min-h-screen flex items-center justify-center bg-base-100 w-full">
        {
            products?.docs 
            ? 
            <div className="max-w-3xl mx-auto w-full">
                <h1 className="text-2xl font-medium text-center mt-28"> Panel de control </h1>
                <article className="border-2 p-2 border-neutral-200 rounded-md w-full my-10 shadow-xl">
                    <div className="flex justify-between items-center w-full p-4">
                        <h2 className="text-xl font-bold">Lista de productos</h2>
                        <Button type="action" action={ openModal }>
                            Nuevo producto 
                            <i className="ri-add-fill"/>
                        </Button>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th> Producto </th><th> Título </th> <th>Precio unitario</th> <th> Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { products.docs?.map( product => (
                                <tr key={ product._id } >
                                    <td>
                                        <Link to={`/product/${ product._id }`} >
                                            <img className="w-12 h-12 rounded-full" src={ product.thumbnail } alt={ product.title }/>
                                        </Link>
                                    </td>
                                    <td>{ product.title }</td>
                                    <td>${ product.price }</td>
                                    <td className="flex">
                                        <button className='btn btn-outline font-normal btn-success'>
                                            <i className='ri-pencil-line'/>
                                        </button>
                                        <span className="divider divider-horizontal"/>
                                        <button className="btn btn-outline font-normal btn-error">
                                            <i className='ri-delete-bin-6-line'/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>
            </div>
            : <AlertError message="Error al obtener los productos."/>
        }

        </section>


        <ProductModal />
    </>
    )
}