import { useProductsStore } from "../../../hooks"
import { Link } from "react-router-dom";


export const ControlPanel = () => {
    
    const { products } = useProductsStore()

    return (
        <section className="flex  flex-col w-full mx-4" style={{ maxWidth: '900px' }}>
            <h1 className="text-2xl text-center mt-28"> Admin Panel </h1>

            <article className="flex justify-between w-full my-10">
                <div className="tabs">
                    <a className="tab tab-active">Productos</a> 
                    <a className="tab">Usuarios</a>
                </div>
                <Link to='/admin/new-product' className="btn btn-neutral normal-case">
                    Crear nuevo producto
                </Link>
            </article>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th> Producto </th><th> ID </th><th> Título </th><th> Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.docs?.map( product => (
                                <tr className="hover">
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={ product.thumbnail } alt={ product.title }/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{ product._id }</td>
                                    <td>{ product.title }</td>
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
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}